import appointments from '@/mock/data/appointments.json'
import doctors from '@/mock/data/doctors.json'
import users from '@/mock/data/users.json'

const appointmentsData = appointments.map((appointment) => ({
  patientId: appointment.id.toString(),
  doctorId: appointment.doctor_name,
  name: appointment.doctor_name,
  time: appointment.time,
  link: appointment.date, // I'm assuming you want to use the date field as the link
  duration: 60, // Assuming each appointment lasts for 60 minutes
}))

const data = {
    appointments: appointmentsData,
    doctors,
    patients
}

export const getMockData = (name: string) => {
    return {
        [name]: data[name as keyof typeof data]
    }
}
