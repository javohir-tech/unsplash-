
import { FormInput } from './'

//react rouder dom
import { Form } from 'react-router-dom'

function search() {

    return (
        <Form method="POST" className='max-w-96 mx-auto flex gap-2'>
            <FormInput type="search" placeholder="Search" name="Search" />
            <button className="btn btn-primary md:hidden btn-sm">Search</button>
        </Form>
    )
}

export default search
