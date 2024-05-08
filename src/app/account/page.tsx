"use client";
function Facebook() {
  const handleBack = () => {
    alert("Back Home");
  };
  return (
    <div>
      <div>
        Account Page
        <div>
          <button onClick={() => handleBack()}>Back Home</button>
        </div>
      </div>
    </div>
  );
}

export default Facebook;
