export const PageHeading = ({ heading, className }) => {
  return (
    <h1 className={`flex ml-20 ${className ? className : 'justify-center'}`}>
      <img src={heading} alt="kid-dp" className="h-12" />
    </h1>
  );
};
