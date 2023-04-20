import React from 'react'
import './input.css';



class Counter extends React.Component
{
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  } 

  reset = () => {
    this.setState({
      count: this.state.count = 0,
    }) 

  };

  render(){
    return(
      <>
      <div className='m-10 mb-20 text-teal-400 text-5xl text-center tracking-wider font-semibold'>Counter</div>
     
      <section>
        <div className='  text-center bg-pink-100 m-10 md:mx-96 md:text-2xl p-20 text-base tracking-widest rounded-3xl text-slate-600 shadow-2xl '>
          <h1>Clicked <span className=' text-pink-600 text-3xl inline-block box-decoration-clone'>{this.state.count}</span> times</h1>
        </div>
        <div className='flex flex-inital '>
        <div className=' text-center basis-9/12'>
          <button onClick={this.increaseCount} className='text-center text-xl font-semibold text-slate-700 border m-5 md:m-10 p-5 flex-row rounded-lg hover:text-teal-500 hover:text-2xl tracking-wider'>Click Me !</button>
        </div>
        <div className=' text-center basis-9/12 '>
          <button onClick={this.reset} className='text-center text-xl font-semibold text-slate-700 border m-5 md:m-10 p-5 flex-row rounded-lg hover:text-teal-500 hover:text-2xl tracking-wider'>Reset</button>
        </div> 
        </div>
      </section>
      </>
    )
  }

}


// const Counter = () => {
//   return (
//     <div>
//     <div id='counter' className=' m-10 text-rose-400 text-5xl text-center tracking-wider font-semibold'>Counter</div>
//     <section className='  bg-pink-100 m-10'>
//       <div>

//       </div>
//     </section>
//     </div>
//     )
// }

 export default Counter