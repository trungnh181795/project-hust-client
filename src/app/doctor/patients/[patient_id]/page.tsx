import { redirect } from 'next/navigation'

export default function PatientDetailPage({
  params,
}: {
  params: { patient_id: string }
}) {
  const patientId = params.patient_id
  redirect(`/doctor/patients/${patientId}/information`)

  return
}
