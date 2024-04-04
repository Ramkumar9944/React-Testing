const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section One</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="" alt="pic" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Ram"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="location">Job Locations</label>
          <select id="job-location">
            <option value="">Select your country</option>
            <option value="US">UNOTED STATES</option>
            <option value="UK">UNITED KINGDOM</option>
            <option value="CA">CANADA</option>
            <option value="IN">INDIA</option>
            <option value="AU">AUSTRALIA</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
export default Application;
