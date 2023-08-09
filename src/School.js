class School {
    constructor(data) {
      this._school_id = data.school_id;
      this._school_name = data.school_name;
      this._school_email = data.school_email;
      this._school_address = data.school_address;
      this._school_city = data.school_city;
      this._school_state = data.school_state;
      this._school_pincode = data.school_pincode;
      this._school_adminEmail = data.school_adminEmail;
      this._school_registration_date = data.school_registration_date;
      this._icard_template = data.icard_template;
      this._school_status = data.school_status;
      this._phones = data.phones;
      this._principal = data.principal;
      this._schoolFiles = data.schoolFiles;
      this._id = data.id;
    }
  
    // Getter methods
    get school_id() {
      return this._school_id;
    }
  
    get school_name() {
      return this._school_name;
    }
  
    get school_email() {
      return this._school_email;
    }
  
    get school_address() {
      return this._school_address;
    }
  
    get school_city() {
      return this._school_city;
    }
  
    get school_state() {
      return this._school_state;
    }
  
    get school_pincode() {
      return this._school_pincode;
    }
  
    get school_adminEmail() {
      return this._school_adminEmail;
    }
  
    get school_registration_date() {
      return this._school_registration_date;
    }
  
    get icard_template() {
      return this._icard_template;
    }
  
    get school_status() {
      return this._school_status;
    }
  
    get phones() {
      return this._phones;
    }
  
    get principal() {
      return this._principal;
    }
  
    get schoolFiles() {
      return this._schoolFiles;
    }
  
    get id() {
      return this._id;
    }
  
    // Setter methods (optional, can be omitted if you don't need to modify the data)
  
    // Example of a setter method
    set school_name(newName) {
      this._school_name = newName;
    }
  }
  
  // Example usage:
  const jsonData = {
    // The provided JSON data here...
  };
  
  const school = new School(jsonData);
  
  console.log(school.school_name); // Output: "Thangapara High school"
  school.school_name = "New School Name"; // Use the setter method to modify the school_name
  console.log(school.school_name); // Output: "New School Name"

  export default School;
  