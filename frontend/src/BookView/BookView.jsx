import React from 'react'

function BookView(item) {
  return (
    <>
      <div className='mt-4 my-3 p-3'>
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure><img src={item.image} alt="image" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
        <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions  flex justify-between">
          <div className="badge badge-outline">{item.price}₹</div> 
          <div className="badge badge-outline hover:bg-blue-500 hover:text-white duration-200 px-3 py-3">
            <button>See Book</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default BookView