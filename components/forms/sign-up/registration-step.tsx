'use client'
import { useAuthContextHook } from '@/context/use-auth-context'
import React, { use, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { string } from 'zod'
import TypeSelectionForm from './type-selection-form'

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const { register, formState: { errors }, setValue } = useFormContext()
    const { currentStep } = useAuthContextHook();
    const  [onOTP, setOTP ] = useState<string>('')
    const [onuserType,setUserType]=useState<'owner'| 'student'>('owner')
    setValue('otp', onOTP)
    switch (currentStep) {
        case 1: return (
            <TypeSelectionForm
                register={register}
                userType={onuserType}
                setUserType={setUserType}/>
        )
        case 2:
        case 3:
    }
  return (
    <div>RegistrationFormStep</div>
  )
}

export default RegistrationFormStep