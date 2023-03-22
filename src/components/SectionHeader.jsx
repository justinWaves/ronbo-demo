const SectionHeader = ({ children }) => {
    return (
      <h1 className="text-6xl md:text-8xl font-thin text-white uppercase tracking-widest ">
        {children}
      </h1>
    );
  };

  export default SectionHeader;