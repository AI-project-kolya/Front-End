import React from 'react'

function Prediction({ prediction }) {
  return (
    <>
      <div class="card text-center mb-3">
        <div class="card-body">
          <p class="card-text">{prediction}</p>
          <a href="#" class="btn btn-primary">predict again</a>
        </div>
      </div>
    </>
  )
}

export default Prediction