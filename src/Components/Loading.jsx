import React from 'react'

const Loading = () => {
return (
<div class="my-40 h-full flex justify-center items-center">
  <div class="relative mx-auto h-8 w-32">
    <div class="relative mx-auto ms-5 h-24 w-24 animate-bounce rounded-full border-2">
      <div class="absolute bottom-0 right-10">
        <div class="relative h-40 animate-bounce">
          <div class="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Loading