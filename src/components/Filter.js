import React from 'react'

function Filter({filterData}) {
  return (
    <div>
        {
            filterData.map((data)=>
            {
                return(
                    <button>x
                        {data.title}
                    </button>
                );
            })
        }
    </div>
  )
}

export default Filter