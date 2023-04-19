import React, { Fragment } from 'react';

function SideBar() {
  return <section className='grid grid-flow-row border-[1px] p-3 '>
    <button className='p-2 bg-yellow-400 rounded-lg'>
        + New Note
    </button>
    <p className='my-7 mx-2'>
        All Notes
    </p>
    <p className='my-3 mx-2'>
        Starred
    </p>
  </section>;
}

export default SideBar;
