//react 
import React, { useEffect } from 'react'

//react router dom
import { Form, useActionData } from 'react-router-dom'

//components
import FormInput from './FormInput'

//firebase
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase/useFireBaseConfig';
import { toast } from 'react-toastify';

export default function Modal() {
    const data = useActionData()

    useEffect(() => {
        if (data?.passwordReset) {
            sendPasswordResetEmail(auth, data.passwordReset)
                .then(() => {
                    toast.success("salom")
                    document.getElementById('my_modal_1').close()
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });
        }
    }, [data])
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-3">Reset Password</h3>
                    <div >
                        <Form method="POST">
                            <FormInput type="email" placeholder="Email" name="passwordReset" />
                            <div className='flex justify-end gap-3'>
                                <button type='button' className="btn btn-secondary mt-3" onClick={() => document.getElementById('my_modal_1').close()} >Close</button>
                                <button className='btn btn-primary mt-3'>Send</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
