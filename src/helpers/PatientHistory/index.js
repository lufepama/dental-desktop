export const managePatientFormData = (patientData) => {

    let formInfoData = new FormData()

    formInfoData.append('firstName', patientData.firstName)
    formInfoData.append('lastName', patientData.lastName)
    formInfoData.append('phoneNumber', patientData.phoneNumber)
    formInfoData.append('ocupation', patientData.ocupation)
    formInfoData.append('gender', patientData.gender)
    formInfoData.append('address', patientData.address)
    if (patientData._id) formInfoData.append('_id', patientData._id)
    if (patientData.patientImg) formInfoData.append('patientImg', patientData.patientImg)

    return formInfoData
}

