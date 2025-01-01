import React, { useState } from 'react'

//react router dom
import { Form } from 'react-router-dom'
import { toast } from 'react-toastify';


export default function Contact() {

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //telegram message

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMesaage] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()
    const message = `
      Unsplash Side!
      name : ${name}
      number: ${number}
      email: ${email}
      message: ${email}
    `
    const token = `7911063414:AAFP6wlYH5rmwMsnlRxEhNqoAcyFPp79Ii8`
    const bot_id = 1896479864

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: bot_id,
        text: message,
      })
    })
      .then((response) => response.json())
      .then(data => {
        if (data.ok) {
          setName('');
          setEmail('');
          setMesaage('');
          setNumber('');
          openModal()
        }else{
          toast.warning("malumotlar jo'natilmadi keyinroq yana urunib koring ")
        }
      })
      .catch(error=>{
        alert.error(error)
      })
  }

  return (
    <div className='container  py-10 px-1'>
      <h1 className='font-bold text-xl mb-3'>Biz Bilan Bog'laning </h1>
      <Form onSubmit={handleSumbit} className=' flex  flex-col gap-3'>
        <input type="text" placeholder="Name" className="input input-bordered w-full" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="number" placeholder="Number" className="input input-bordered w-full " onChange={(e) => setNumber(e.target.value)} value={number} />
        <input type="email" placeholder="Email" className="input input-bordered w-full" onChange={(e) => setEmail(e.target.value)} value={email} />
        <textarea
          onChange={(e) => setMesaage(e.target.value)} value={message}
          class="textarea textarea-bordered block w-full "
          placeholder="Type your message here..."></textarea>
        <span className='flex justify-end'>
          <button className='btn btn-primary px-12'>Send</button>
        </span>
      </Form>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-xl font-bold">This is a Modal</h2>
            <p>Malumotlar jo'natildi siz bilan tez orada aloqaga chiqamiz</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}
