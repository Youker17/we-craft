import Link from 'next/link';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <Link
      href="/"
      className='tracking-widest px-2 py-2  hover:bg-white hover:text-black transition-all text-white group border-2 border-white  overflow-hidden rounded-md group'
    >
      <div className='p-3 relative overflow-hidden  rounded-lg'>
      <div className='mix-blend-difference bg-white absolute top-0 -right-5 w-10 h-4 rotate-45'></div>
      Contact Us
      </div>
    </Link>
  );
};

export default GetStartedButton;

