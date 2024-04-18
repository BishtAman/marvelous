export const PageHeading = ({ heading, className, padd }) => {
  return (
    <h1 className={`flex  ${padd ? padd : 'ml-20'} ${className ? className : 'justify-center'} `}>
      <img src={heading} alt="kid-dp" className="h-12 max-sm:h-8" />
    </h1>
  );
};
