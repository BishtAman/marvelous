export const PageHeading = ({ heading, className }) => {
  return (
    <h1 className={`flex  ${className ? className : 'justify-center'} `}>
      <img src={heading} alt="kid-dp" className="h-12 max-sm:h-8" />
    </h1>
  );
};
