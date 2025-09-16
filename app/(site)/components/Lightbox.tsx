'use client';
import { useState } from 'react';

export default function Lightbox({images}:{images:string[]}){
  const [open,setOpen]=useState(false);
  const [idx,setIdx]=useState(0);
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((src,i)=> (
          <button key={src} className="relative group" onClick={()=>{setIdx(i);setOpen(true);}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="w-full rounded-xl border border-white/10 group-hover:opacity-90"/>
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={()=>setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[idx]} alt="" className="max-h-[90vh] max-w-[90vw] rounded-xl"/>
        </div>
      )}
    </>
  );
}
