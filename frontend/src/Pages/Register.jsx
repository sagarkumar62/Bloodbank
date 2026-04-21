import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/reducer/usersSlice";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    // Basic Details
    name: "",
    phone: "",
    phoneVerified: false,
    email: "",
    password: "",
    // Personal Information
    dob: "",
    gender: "Male",
    weight: "",
    bloodGroup: "O+",
    address: "",
    pincode: "",
    city: "",
    state: "",
    // Health & Medical History
    fitnessStatus: "fit",
    chronicDiseases: "",
    surgeries: "",
    medication: "",
    previousDonations: "",
    recentInfections: "",
    tattoosPiercing: "no",
    alcoholConsumption: "no",
    // Women-specific
    pregnant: "no",
    breastfeeding: "no",
    // Additional
    emergencyContactName: "",
    emergencyContactPhone: "",
    consent: false,
  });

  // Mock OTP flow state
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let nextValue = value;
    // Enforce max 8 characters for password as requested
    if (name === "password") nextValue = nextValue.slice(0, 8);
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : nextValue }));
  };

  const sendOtp = () => {
    if (!form.phone) return alert("Enter phone number first");
    setOtpSent(true);
    // In a real app, trigger backend OTP and don't hardcode below. For now mock.
    alert("Mock OTP sent: 1234");
  };

  const verifyOtp = () => {
    if (otp === "1234") {
      setForm((prev) => ({ ...prev, phoneVerified: true }));
      alert("Phone verified");
    } else {
      alert("Invalid OTP (use 1234 in this mock)");
    }
  };

  const canProceedStep1 = () => {
    return form.name && form.phone && form.email && form.password && form.phoneVerified;
  };

  const handleNext = () => {
    if (currentStep === 1 && !canProceedStep1()) return alert("Please complete basic details and verify phone.");
    setCurrentStep((s) => Math.min(5, s + 1));
  };

  const handleBack = () => setCurrentStep((s) => Math.max(1, s - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return alert("You must agree to consent & agreements to submit.");
    // Final submission - dispatch to Redux users slice
    const userPayload = {
      id: Date.now(),
      name: form.name,
      phone: form.phone,
      email: form.email,
      password: form.password,
      dob: form.dob,
      gender: form.gender,
      bloodGroup: form.bloodGroup,
    };
    dispatch(registerUser(userPayload));
    setSubmitted(true);
  };

  const STEP_LABELS = [
    'Basic Details',
    'Personal Info',
    'Health & History',
    'Additional',
    'Review',
  ];

  const StepIndicator = () => (
    <div className="flex items-center gap-2 mb-6">
      {STEP_LABELS.map((label, idx) => {
        const s = idx + 1;
        return (
          <div
            key={s}
            className={`flex-1 text-center py-2 rounded-full text-sm px-2 md:text-base ${
              currentStep === s ? 'bg-[#E53935] text-white' : 'bg-gray-200 text-gray-600'
            }`}
            title={label}
          >
            {label}
          </div>
        );
      })}
    </div>
  );

  if (submitted) {
    return (
      <>
        <Nav />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Thank you!</h2>
            <p className="text-gray-600 mb-6">Your registration has been received. We'll contact you soon.</p>
            <Link to="/">
              <button className="px-6 py-3 rounded-full bg-[#E53935] text-white font-semibold">Go Home</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Register to Donate</h2>
          <p className="text-sm text-gray-500 mb-4">Complete the form to join our donor community. We'll only use your data to coordinate donations.</p>

          <StepIndicator />

          <form onSubmit={handleSubmit}>
            {/* Step 1 - Basic Details */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="flex gap-2">
                    <input name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" />
                    <button type="button" onClick={sendOtp} className="px-3 py-2 rounded-md bg-[#E53935] text-white">Send OTP</button>
                  </div>
                  {otpSent && !form.phoneVerified && (
                    <div className="mt-2 flex gap-2">
                      <input placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="px-3 py-2 border rounded-lg" />
                      <button type="button" onClick={verifyOtp} className="px-3 py-2 rounded-md bg-green-600 text-white">Verify</button>
                    </div>
                  )}
                  {form.phoneVerified && <p className="text-sm text-green-600 mt-1">Phone verified</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input name="password" type="password" maxLength={8} value={form.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200" />
                  <p className="text-xs text-gray-500 mt-1">Maximum 8 characters</p>
                </div>
              </div>
            )}

            {/* Step 2 - Personal Information */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input name="dob" type="date" value={form.dob} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select name="gender" value={form.gender} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                  <input name="weight" value={form.weight} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                  <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input name="address" value={form.address} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                  <input name="pincode" value={form.pincode} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input name="state" value={form.state} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
            )}

            {/* Step 3 - Health & Medical History */}
            {currentStep === 3 && (
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fitness Status</label>
                  <select name="fitnessStatus" value={form.fitnessStatus} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                    <option value="fit">Fit</option>
                    <option value="unfit">Unfit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Chronic Diseases (if any)</label>
                  <input name="chronicDiseases" value={form.chronicDiseases} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. Diabetes, Hypertension" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Surgeries</label>
                  <input name="surgeries" value={form.surgeries} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="List surgeries and dates" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medication</label>
                  <input name="medication" value={form.medication} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Current medications" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Previous Donations</label>
                  <input name="previousDonations" value={form.previousDonations} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="Number of donations or description" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recent Infections</label>
                  <input name="recentInfections" value={form.recentInfections} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. COVID, Flu" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tattoos / Piercing in last 12 months?</label>
                  <select name="tattoosPiercing" value={form.tattoosPiercing} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alcohol consumption</label>
                  <select name="alcoholConsumption" value={form.alcoholConsumption} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                    <option value="no">No</option>
                    <option value="occasionally">Occasionally</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>

                {/* Women-specific questions */}
                {form.gender === "Female" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pregnant?</label>
                      <select name="pregnant" value={form.pregnant} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Breastfeeding?</label>
                      <select name="breastfeeding" value={form.breastfeeding} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4 - Additional & Consent */}
            {currentStep === 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name</label>
                  <input name="emergencyContactName" value={form.emergencyContactName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone</label>
                  <input name="emergencyContactPhone" value={form.emergencyContactPhone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                </div>

                <div className="sm:col-span-2">
                  <label className="inline-flex items-start gap-2">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1" />
                    <span className="text-sm text-gray-700">I consent to the storage and use of my data for donor coordination and agree to the terms.</span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 5 - Review & Submit */}
            {currentStep === 5 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Review your details</h3>
                <pre className="text-sm bg-gray-50 p-3 rounded-lg overflow-auto max-h-60">{JSON.stringify(form, null, 2)}</pre>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 mt-6">
              <button type="button" onClick={handleBack} disabled={currentStep === 1} className={`px-4 py-2 rounded-md border ${currentStep===1? 'opacity-50 cursor-not-allowed': ''}`}>
                Back
              </button>

              {currentStep < 5 ? (
                <div className="flex gap-2">
                  <button type="button" onClick={handleNext} className="px-4 py-2 rounded-md bg-[#E53935] text-white">Next</button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button type="submit" className="px-4 py-2 rounded-md bg-[#E53935] text-white">Submit Registration</button>
                </div>
              )}
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-[#E53935] font-semibold">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
