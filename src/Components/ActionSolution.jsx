import { useState } from "react";

function ActionSolution() {
  const [action, setAction] = useState(false);
  const [activeTab, setActiveTab] = useState("TranscriptX");
  const tabs = ["Example 1", "Example 2", "Example 3", "Example 4"];
  const [selectedExampleTab, setSelectedExampleTab] = useState("Example 1");
  return (
    <section id="" className="bg-[#1E293B] shadow-2xl pt-12 pb-30 px-6">
      <section>
        <h2 className="text-3xl pt-12 pb-4 border-0 md:text-3xl font-bold text-center text-blue-500 mb-8">
          See Our Solutions in Action
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className=" rounded-t-lg overflow-hidden shadow-md transition-all duration-300">
            {/*  Main Navigation Tabs */}
            <div className="grid grid-cols-4 text-center border-b bg-[#0F172A]">
              {["TranscriptX", "Chartwright", "Redactify", "Validify"].map(
                (tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 leading-[26px] border-r border-r-gray-700 border-[#3b82f6]  font-semibold cursor-pointer transition text-center
                      ${
                        activeTab === tab
                          ? "text-white bg-[#1E293B] border-b-4 "
                          : "text-[#94a3b8] hover:bg-[#1e3a8a]/10"
                      }`}
                  >
                    {tab}
                  </div>
                )
              )}
            </div>

            {/* Comparison Toggle */}
            <div
              onClick={() => setAction(!action)}
              className="text-center bg-[#2563eb] hover:bg-[#3b83f6] text-white py-3 cursor-pointer font-semibold "
            >
              Click to expand comparison
            </div>
          </div>
        </div>

        {/* Toggle Section (unchanged) */}
        {action && (
          <div className="max-w-4xl mx-auto transition-all duration-200 ease-in-out">
            <div className="grid grid-cols-4 text-center border-b border-b-gray-700  bg-[#1E293B]">
              {tabs.map((tab, index) => (
                <div
                  key={tab}
                  onClick={() => setSelectedExampleTab(tab)}
                  className={`px-6 py-3 leading-[26px] font-semibold text-center cursor-pointer transition 
          ${index !== tabs.length - 1 ? "border-r border-gray-700" : ""} 
          ${
            selectedExampleTab === tab
              ? "bg-[#2563eb] text-white "
              : "text-[#2563eb]"
          }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <h3 className="text-xl pl-4 font-semibold py-4 leading-[26px] text-gray-100">
              Experience TranscriptX – Effortless, Accurate Medical
              Transcription
            </h3>
            {/* small nav */}
            <div className="flex justify-between  ">
              <div className="bg-[#0A1022] h-[500px] w-1/2 overflow-y-auto custom-scrollbar relative">
                {selectedExampleTab === "Example 1" && (
                  <div className="flex justify-between sticky top-0 items-center py-3 px-3 bg-[#14274C]">
                    <p className="text-[#3b82f6]">Doctor's Dictation</p>
                    <p className="text-[#3b82f6]">Audio Input</p>
                  </div>
                )}
                {selectedExampleTab === "Example 2" && (
                  <div className="flex justify-between sticky top-0 items-center py-3 px-3 bg-[#14274C]">
                    <p className="text-[#3b82f6]">Nurse's Quick Report</p>
                    <p className="text-[#3b82f6]">Simulated Verbal/Notes</p>
                  </div>
                )}
                {selectedExampleTab === "Example 3" && (
                  <div className="flex justify-between sticky top-0 items-center py-3 px-3 bg-[#14274C]">
                    <p className="text-[#3b82f6]">Psychiatry Dictation</p>
                    <p className="text-[#3b82f6]">Your Raw Audio</p>
                  </div>
                )}
                {selectedExampleTab === "Example 4" && (
                  <div className="flex justify-between sticky top-0 items-center py-3 px-3 bg-[#14274C]">
                    <p className="text-[#3b82f6]">Case Dictation</p>
                    <p className="text-[#3b82f6]">Raw Audio</p>
                  </div>
                )}

                <div className="flex justify-center">
                  {selectedExampleTab === "Example 1" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      Doctor's Dictation (Audio Input Simulation)
                    </h1>
                  )}
                  {selectedExampleTab === "Example 2" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      Nurse's Quick Report (Simulated Verbal Input/Jotted Notes)
                    </h1>
                  )}
                  {selectedExampleTab === "Example 3" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      Your Raw Audio Dictation
                    </h1>
                  )}
                  {selectedExampleTab === "Example 4" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      Raw Dictation: Client Follow-Up
                    </h1>
                  )}
                </div>
                {selectedExampleTab === "Example 1" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    "Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today,
                    October 26th, 2023. Chief complaint... uh... right knee
                    pain, ongoing for about 3 months, worse with activity,
                    especially stairs. Subjective: Patient describes the pain as
                    a dull ache, located medially. Rates it a 6/10 currently,
                    can go up to 8/10 after exercise. Some morning stiffness,
                    lasts maybe 15 minutes. No significant swelling reported,
                    denies locking or giving way. Uh... tried over-the-counter
                    Ibuprofen with some partial relief. No history of trauma.
                    Otherwise healthy. Objective: Gait is non-antalgic. Right
                    knee exam: No effusion visible. Mild tenderness to palpation
                    over the medial joint line. McMurray's test is negative.
                    Lachman and drawer tests stable. Range of motion is full,
                    though terminal flexion elicits some discomfort medially.
                    Assessment: Likely medial compartment osteoarthritis of the
                    right knee. Differential includes medial meniscus tear,
                    although less likely given exam findings. Plan: Uh... Obtain
                    bilateral weight-bearing knee X-rays. Recommend continued
                    NSAID use as needed, consider switching to Naproxen.
                    Discussed physical therapy options for strengthening
                    quadriceps and hamstrings. Also discussed... lifestyle
                    modifications, weight management if applicable... oh,
                    patient's BMI is 24, so that's fine. Follow up in 4 weeks
                    with X-ray results to discuss further management, possibly
                    including corticosteroid injection or referral to
                    orthopedics if symptoms persist. End dictation." sad;sajd;sa
                  </p>
                )}
                {selectedExampleTab === "Example 2" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    "Alright, handover for Bed 7, uh, Mrs. Gable, 72F, brought
                    in by EMS, syncopal episode at home. Witnessed by husband,
                    slumped in chair, maybe 30 seconds LOC? GCS 15 on arrival.
                    Hx of HTN, Afib on Eliquis. Vitals: BP 105/60, HR 115 irreg,
                    RR 20, SpO2 94% RA, Temp 37.1. Put her on the monitor, she's
                    in Afib RVR. Got an 18g IV L AC, labs drawn - CBC, CMP,
                    Trop, Coags sent stat. EKG done, showed Afib RVR, no acute
                    ST changes noted. Portable chest X-ray ordered. Gave a 500cc
                    NS bolus, BP now 115/65, HR down to 105. Still awake, alert,
                    denies CP, SOB. Neuro checks grossly normal. Waiting on lab
                    results and CXR read. Dr. Evans aware, considering diltiazem
                    drip maybe? Keep a close eye on her pressure and rhythm."
                  </p>
                )}
                {selectedExampleTab === "Example 3" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    "Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today,
                    October 26th, 2023. Chief complaint... uh... right knee
                    pain, ongoing for about 3 months, worse with activity,
                    especially stairs. Subjective: Patient describes the pain as
                    a dull ache, located medially. Rates it a 6/10 currently,
                    can go up to 8/10 after exercise. Some morning stiffness,
                    lasts maybe 15 minutes. No significant swelling reported,
                    denies locking or giving way. Uh... tried over-the-counter
                    Ibuprofen with some partial relief. No history of trauma.
                    Otherwise healthy. Objective: Gait is non-antalgic. Right
                    knee exam: No effusion visible. Mild tenderness to palpation
                    over the medial joint line. McMurray's test is negative.
                    Lachman and drawer tests stable. Range of motion is full,
                    though terminal flexion elicits some discomfort medially.
                    Assessment: Likely medial compartment osteoarthritis of the
                    right knee. Differential includes medial meniscus tear,
                    although less likely given exam findings. Plan: Uh... Obtain
                    bilateral weight-bearing knee X-rays. Recommend continued
                    NSAID use as needed, consider switching to Naproxen.
                    Discussed physical therapy options for strengthening
                    quadriceps and hamstrings. Also discussed... lifestyle
                    modifications, weight management if applicable... oh,
                    patient's BMI is 24, so that's fine. Follow up in 4 weeks
                    with X-ray results to discuss further management, possibly
                    including corticosteroid injection or referral to
                    orthopedics if symptoms persist. End dictation." sad;sajd;sa
                  </p>
                )}
                {selectedExampleTab === "Example 4" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    "Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today,
                    October 26th, 2023. Chief complaint... uh... right knee
                    pain, ongoing for about 3 months, worse with activity,
                    especially stairs. Subjective: Patient describes the pain as
                    a dull ache, located medially. Rates it a 6/10 currently,
                    can go up to 8/10 after exercise. Some morning stiffness,
                    lasts maybe 15 minutes. No significant swelling reported,
                    denies locking or giving way. Uh... tried over-the-counter
                    Ibuprofen with some partial relief. No history of trauma.
                    Otherwise healthy. Objective: Gait is non-antalgic. Right
                    knee exam: No effusion visible. Mild tenderness to palpation
                    over the medial joint line. McMurray's test is negative.
                    Lachman and drawer tests stable. Range of motion is full,
                    though terminal flexion elicits some discomfort medially.
                    Assessment: Likely medial compartment osteoarthritis of the
                    right knee. Differential includes medial meniscus tear,
                    although less likely given exam findings. Plan: Uh... Obtain
                    bilateral weight-bearing knee X-rays. Recommend continued
                    NSAID use as needed, consider switching to Naproxen.
                    Discussed physical therapy options for strengthening
                    quadriceps and hamstrings. Also discussed... lifestyle
                    modifications, weight management if applicable... oh,
                    patient's BMI is 24, so that's fine. Follow up in 4 weeks
                    with X-ray results to discuss further management, possibly
                    including corticosteroid injection or referral to
                    orthopedics if symptoms persist. End dictation." sad;sajd;sa
                  </p>
                )}
              </div>
              <div className="bg-[#0A1022] h-[500px] custom-scrollbar w-1/2 overflow-y-auto relative">
                {selectedExampleTab === "Example 1" && (
                  <div className="flex justify-between items-center py-3 px-3 sticky top-0 bg-[#392D1D]">
                    <p className="text-[#f59e0b]">TranscriptX Note</p>
                    <p className="text-[#f59e0b]">AI-Generated Output</p>
                  </div>
                )}
                {selectedExampleTab === "Example 2" && (
                  <div className="flex justify-between items-center py-3 px-3 sticky top-0 bg-[#392D1D]">
                    <p className="text-[#f59e0b]">TranscriptX Note</p>
                    <p className="text-[#f59e0b]">
                      AI-Structured Nursing Note/Handover
                    </p>
                  </div>
                )}
                {selectedExampleTab === "Example 3" && (
                  <div className="flex justify-between items-center py-3 px-3 sticky top-0 bg-[#392D1D]">
                    <p className="text-[#f59e0b]">TranscriptX Note</p>
                    <p className="text-[#f59e0b]">Accurate Transcription</p>
                  </div>
                )}
                {selectedExampleTab === "Example 4" && (
                  <div className="flex justify-between items-center py-3 px-3 sticky top-0 bg-[#392D1D]">
                    <p className="text-[#f59e0b]">TranscriptX Note</p>
                    <p className="text-[#f59e0b]">Enhanced Case Note</p>
                  </div>
                )}

                <div className="flex justify-center">
                  {selectedExampleTab === "Example 1" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      TranscriptX - AI-Generated Note
                    </h1>
                  )}
                  {selectedExampleTab === "Example 2" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      TranscriptX - AI-Structured Nursing Note/Handover
                    </h1>
                  )}
                  {selectedExampleTab === "Example 3" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      TranscriptX Accurate Transcription
                    </h1>
                  )}
                  {selectedExampleTab === "Example 4" && (
                    <h1 className="text-xl text-center border-b border-gray-400 pl-4 font-semibold py-4 leading-[26px] text-gray-100 max-w-2xl">
                      TranscriptX Enhanced Case Note
                    </h1>
                  )}
                </div>
                {selectedExampleTab === "Example 1" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    Patient: Sarah Chen DOB: 03/22/1978 Date of Service: October
                    26, 2023 Chief Complaint: Right knee pain x 3 months.
                    Subjective: Patient reports right knee pain ongoing for
                    approximately 3 months, described as a dull ache located
                    medially. Pain worsens with activity, particularly stair
                    climbing. Pain rated 6/10 currently, increasing to 8/10
                    post-exercise. Reports approximately 15 minutes of morning
                    stiffness. Denies significant swelling, locking, or episodes
                    of giving way. Partial relief noted with over-the-counter
                    Ibuprofen. No history of trauma. Patient is otherwise
                    healthy. Objective: Gait: Non-antalgic. Right Knee Exam: No
                    visible effusion. Mild tenderness to palpation over the
                    medial joint line. Full range of motion; terminal flexion
                    elicits mild medial discomfort. McMurray's test negative.
                    Lachman test negative. Anterior/Posterior Drawer tests
                    negative (knee stable). BMI: 24 Assessment: Medial
                    compartment osteoarthritis, right knee (probable). Rule out
                    medial meniscus tear (less likely). Plan: Order bilateral
                    weight-bearing knee X-rays (AP, lateral, sunrise views).
                    Recommend continued PRN NSAID use (consider trial of
                    Naproxen 500mg BID PRN). Discussed referral for Physical
                    Therapy focusing on quadriceps/hamstring strengthening.
                    Discussed lifestyle modifications. Follow up in 4 weeks to
                    review X-ray results and clinical progress. Consider
                    intra-articular corticosteroid injection or orthopedic
                    referral if symptoms persist or worsen.
                  </p>
                )}
                {selectedExampleTab === "Example 2" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    Patient: Gable, [First Name Redacted] Age/Sex: 72-year-old
                    Female (72F) Location: ED Bed 7 Arrival: Via EMS Presenting
                    Complaint: Syncopal episode at home. History: Witnessed
                    syncopal episode (approx. 30 seconds loss of consciousness)
                    reported by husband. Past Medical History (PMH) significant
                    for Hypertension (HTN) and Atrial Fibrillation (Afib),
                    prescribed Eliquis. Initial Assessment (On Arrival):
                    Neurological: Glasgow Coma Scale (GCS) 15. Awake, alert,
                    oriented. Denies chest pain (CP) or shortness of breath
                    (SOB). Gross neurological checks normal. Cardiovascular:
                    Irregularly irregular rhythm noted. Denies chest pain. Vital
                    Signs: BP 105/60 mmHg, Heart Rate (HR) 115 bpm (irregular),
                    Respiratory Rate (RR) 20/min, SpO2 94% on Room Air (RA),
                    Temperature 37.1°C. Interventions & Response: Placed on
                    cardiac monitor: Confirmed Atrial Fibrillation with Rapid
                    ventricular Response (Afib RVR). Intravenous Access:
                    18-gauge IV established in Left Antecubital Fossa (L AC).
                    Labs Drawn: Complete Blood Count (CBC), Comprehensive
                    Metabolic Panel (CMP), Troponin, Coagulation studies sent
                    STAT. Diagnostics: 12-lead Electrocardiogram (EKG) performed
                    - showed Afib RVR, no acute ST segment changes. Portable
                    Chest X-ray (CXR) ordered. Fluid Resuscitation: 500cc Normal
                    Saline (NS) bolus administered intravenously. Response:
                    Post-bolus BP improved to 115/65 mmHg, HR decreased to 105
                    bpm (remains irregular). Patient remains alert. Pending:
                    Laboratory results, CXR interpretation. Plan/Consults: Dr.
                    Evans aware of patient status. Potential initiation of
                    Diltiazem infusion under consideration. Continue close
                    monitoring of vital signs, cardiac rhythm, and neurological
                    status.
                  </p>
                )}
                {selectedExampleTab === "Example 3" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    Patient: 42-year-old male Visit: Follow-up for Major
                    Depressive Disorder (MDD), recurrent, severe, and
                    Generalized Anxiety Disorder (GAD). Subjective: Patient
                    reports mood as approximately "3 out of 10". Continues to
                    experience significant anhedonia, low energy, and
                    hypersomnia. Reports some passive suicidal ideation (SI) but
                    denies active intent, plan, or access to means. Denies
                    homicidal ideation (HI). Appetite is decreased. Current
                    medications include Escitalopram 20mg daily and Mirtazapine
                    15mg at bedtime (QHS), initiated approximately 3 weeks ago
                    for sleep and appetite. Patient states Mirtazapine may be
                    slightly improving sleep but describes overall feeling as
                    "blah". Objective: Affect appears constricted. Mood appears
                    dysthymic. Thought process is logical and reality testing is
                    intact. Denies auditory or visual hallucinations (AVH).
                    Assessment & Plan: Discussed potential augmentation
                    strategies, including adding Bupropion for energy and
                    motivation or increasing the Mirtazapine dose. Patient
                    prefers to continue the current regimen to allow more time
                    for therapeutic effect. Continue Escitalopram 20mg PO daily.
                    Continue Mirtazapine 15mg PO QHS. Reinforced coping skills.
                    Safety plan reviewed and remains in place. Return to clinic
                    (RTC) in 4 weeks for reassessment.
                  </p>
                )}
                {selectedExampleTab === "Example 4" && (
                  <p className="text-[#f8fafc] font-normal p-4">
                    Client: Jane Doe DOB: 05/12/1960 Date of Encounter: [Current
                    Date, e.g., October 26, 2023] Clinical Context & Assessment:
                    Client seen post-discharge from General Hospital following
                    an exacerbation of Chronic Obstructive Pulmonary Disease
                    (COPD) and a new diagnosis of Type 2 Diabetes Mellitus.
                    Client expresses feeling overwhelmed by new diagnoses and
                    management requirements. Living Situation: Resides alone,
                    fixed income (SSI). Environmental Barriers: Apartment
                    accessibility is a concern due to stairs, impacting mobility
                    secondary to dyspnea from COPD. Psychosocial: Client reports
                    feelings of isolation and exhibits potential indicators of
                    depression. Identified Needs & Concerns: Medication
                    Management: Difficulty with new insulin regimen, including
                    fear of injections. Requires education on diabetes
                    self-management (DSM). Dietary Adherence: Requires education
                    and support for managing a diabetic diet. Social Support &
                    Engagement: Needs connection to community resources to
                    combat isolation. Mobility & Safety: Requires assistive
                    device (walker) and support for navigating environmental
                    barriers. Instrumental Activities of Daily Living (IADLs):
                    Inconsistent support for groceries. Access to Care: Requires
                    transportation assistance for future appointments. Emotional
                    Well-being: Expressed need for emotional support. Action
                    Plan: Home Health Services: Initiate referral for home
                    health nursing for medication reconciliation, insulin
                    administration training, and comprehensive diabetes
                    education. Durable Medical Equipment (DME): Facilitate
                    request and authorization for a walker. Transportation:
                    Arrange non-emergency medical transportation for the next
                    clinic visit. Nutritional Support: Explore eligibility and
                    assist with application for food assistance programs (e.g.,
                    Meals on Wheels, SNAP).
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

export default ActionSolution;
