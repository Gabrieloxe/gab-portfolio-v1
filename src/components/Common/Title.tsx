type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 className='text-center font-bold text-4xl'>
      {title}
      <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
    </h1>
  );
};

