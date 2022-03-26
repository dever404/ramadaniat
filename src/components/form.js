import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tel: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/12ade898-da34-491d-85b5-cb9bc6f6152b', this.state)
    .then(response => {
      this.setState({tel : ' '})
    })
  }
  
  render() {
    return (
    <div className='py-10'>
                  <h2 className='text-2xl text-center tracking-tight font-extrabold text-slate-900 pb-10  '>رحلتنا ستنطلق قريبا ... </h2>

        <div fluid className="shadow-lg bg-white rounded-md  py-10 px-2 mt-5 mb-10">
            <p className=' pb-10 text-center'>  سجل رقمك ليصلك اشعار رحلتنا </p>
            <form className="form" onSubmit={this.submitHandler} action='POST'>
                <div className="flex justify-center">
                    <div className="ml-4 flex-initial w-64">
                        <input
                        type="tel"
                        name="tel"
                        id="tel"
                        pattern="[0-9]{10}"
                        autoComplete="given-name"
                        placeholder='رقم هاتفك'
                        className="py-1 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[#b4d6c1] rounded-md"
                        value = {this.state.tel} onChange={this.changeHandler} />
                    </div>
                    <div>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-slate-700  bg-[#b4d6c1] hover:bg-[#a7cdb6] focus:outline-none">
                        إرسال
                    </button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    )
  }
}