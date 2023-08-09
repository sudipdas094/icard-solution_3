import React, { useState } from 'react';
import Logo from './assets/images/rvssGroup.png';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/daterangepicker/daterangepicker.js' ;
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import ImageUpload from './ImageUpload.js';



function AdminLteForm() {
    const [formState, setFormState] = useState({});
  
    const handleChange = (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    }
  
    return (
    
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
           <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
               </li>
               <li class="nav-item d-none d-sm-inline-block">
                  <a href="../../index3.html" class="nav-link">Home</a>
               </li>
               <li class="nav-item d-none d-sm-inline-block">
                  <a href="#" class="nav-link">Contact</a>
               </li>
            </ul>
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                  <i class="fas fa-search"></i>
                  </a>
                  <div class="navbar-search-block">
                     <form class="form-inline">
                        <div class="input-group input-group-sm">
                           <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"></input>
                           <div class="input-group-append">
                              <button class="btn btn-navbar" type="submit">
                              <i class="fas fa-search"></i>
                              </button>
                              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                              <i class="fas fa-times"></i>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="far fa-comments"></i>
                  <span class="badge badge-danger navbar-badge">3</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     <a href="#" class="dropdown-item">
                        <div class="media">
                           <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"></img>
                           <div class="media-body">
                              <h3 class="dropdown-item-title">
                                 Brad Diesel
                                 <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                              </h3>
                              <p class="text-sm">Call me whenever you can...</p>
                              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                           </div>
                        </div>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                        <div class="media">
                           <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"></img>
                           <div class="media-body">
                              <h3 class="dropdown-item-title">
                                 John Pierce
                                 <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                              </h3>
                              <p class="text-sm">I got your message bro</p>
                              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                           </div>
                        </div>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                        <div class="media">
                           <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"></img>
                           <div class="media-body">
                              <h3 class="dropdown-item-title">
                                 Nora Silvester
                                 <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                              </h3>
                              <p class="text-sm">The subject goes here</p>
                              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                           </div>
                        </div>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                  </div>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link" data-toggle="dropdown" href="#">
                  <i class="far fa-bell"></i>
                  <span class="badge badge-warning navbar-badge">15</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                     <span class="dropdown-item dropdown-header">15 Notifications</span>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                     <i class="fas fa-envelope mr-2"></i> 4 new messages
                     <span class="float-right text-muted text-sm">3 mins</span>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                     <i class="fas fa-users mr-2"></i> 8 friend requests
                     <span class="float-right text-muted text-sm">12 hours</span>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item">
                     <i class="fas fa-file mr-2"></i> 3 new reports
                     <span class="float-right text-muted text-sm">2 days</span>
                     </a>
                     <div class="dropdown-divider"></div>
                     <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                  </div>
               </li>
               <li class="nav-item">
                  <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                  <i class="fas fa-expand-arrows-alt"></i>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                  <i class="fas fa-th-large"></i>
                  </a>
               </li>
            </ul>
           </nav>
           <aside class="main-sidebar sidebar-dark-primary elevation-4">
           <a href="http://rvssgroup.com/"class="brand-link">
              <img src={Logo} class="img-responsive" style={{ alignSelf: 'left' , marginRight: '120px'}}  />
           </a>
             <div class="sidebar">
             <div class="form-inline">
             <nav class="mt-2">
                  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    

                     <li class="nav-header">MISCELLANEOUS</li>
                     <li class="nav-item">
                        <a href="../../iframe.html" class="nav-link">
                           <i class="nav-icon fas fa-ellipsis-h"></i>
                           <p>Tabbed IFrame Plugin</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                           <i class="nav-icon fas fa-file"></i>
                           <p>Documentation</p>
                        </a>
                     </li>
                     <li class="nav-header">MULTI LEVEL EXAMPLE</li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="fas fa-circle nav-icon"></i>
                           <p>Level 1</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon fas fa-circle"></i>
                           <p>
                              Level 1
                              <i class="right fas fa-angle-left"></i>
                           </p>
                        </a>
                        <ul class="nav nav-treeview">
                           <li class="nav-item">
                              <a href="#" class="nav-link">
                                 <i class="far fa-circle nav-icon"></i>
                                 <p>Level 2</p>
                              </a>
                           </li>
                           <li class="nav-item">
                              <a href="#" class="nav-link">
                                 <i class="far fa-circle nav-icon"></i>
                                 <p>
                                    Level 2
                                    <i class="right fas fa-angle-left"></i>
                                 </p>
                              </a>
                              <ul class="nav nav-treeview">
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">
                                       <i class="far fa-dot-circle nav-icon"></i>
                                       <p>Level 3</p>
                                    </a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">
                                       <i class="far fa-dot-circle nav-icon"></i>
                                       <p>Level 3</p>
                                    </a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">
                                       <i class="far fa-dot-circle nav-icon"></i>
                                       <p>Level 3</p>
                                    </a>
                                 </li>
                              </ul>
                           </li>
                           <li class="nav-item">
                              <a href="#" class="nav-link">
                                 <i class="far fa-circle nav-icon"></i>
                                 <p>Level 2</p>
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="fas fa-circle nav-icon"></i>
                           <p>Level 1</p>
                        </a>
                     </li>
                     <li class="nav-header">LABELS</li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-circle text-danger"></i>
                           <p class="text">Important</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-circle text-warning"></i>
                           <p>Warning</p>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link">
                           <i class="nav-icon far fa-circle text-info"></i>
                           <p>Informational</p>
                        </a>
                     </li>
                  </ul>
               </nav>
                 
               </div>
             </div>
           </aside>
           <div class="content-wrapper">
           
        <div className="card">
         
        <section class="content-header">
               <div class="container-fluid">
                  <div class="row mb-2">
                     <div class="col-sm-6">
                        <h1>Student Registration</h1>
                     </div>
                     <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                           <li class="breadcrumb-item"><a href="#">Home</a></li>
                           <li class="breadcrumb-item active">General Form</li>
                        </ol>
                     </div>
                  </div>
               </div>
            </section>
        <section class="content">
        <div class="container-fluid">
        <div class="row">
        <div class="col-md-6">
        <div className="card-body">
        <div class="card card-primary">
           <div class="card-header">
            <h3 class="card-title">Student Details</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputName">First Name</label>
              <input type="text" name="fname" className="form-control" id="inputfName" placeholder="Enter First Name" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Middle Name</label>
              <input type="text" name="mname" className="form-control" id="inputmName" placeholder="Enter Middle Name" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Last Name</label>
              <input type="text" name="lname" className="form-control" id="inputlName" placeholder="Enter Last Name" onChange={handleChange} />
            </div>
            <div class="form-group">
                     <label>Student Blood Group</label>
                                          <select class="custom-select">
                                             <option>A+</option>
                                             <option>B+</option>
                                             <option>AB+</option>
                                             <option>O+</option>
                                             <option>O(-)ive</option>
                                             <option>B(-)ive</option>
                                          </select>
            </div>
            <div class="form-group">
<label>Student Date of Birth (DD/MM/YYYY):</label>
<div class="container">
   <div class="row">
      <div class='col-sm-6'>
         <div class="form-group">
            <div class='input-group date' id='datetimepicker3'>
               <input type='text' class="form-control" />
               <span class="input-group-addon">
               <span class="glyphicon glyphicon-time"></span>
               </span>
            </div>
         </div>
      </div>
      <script type="text/javascript">
         $(function (){
               
         });
      </script>
   </div>
</div>
</div>

      <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Guardian Details</h3>
        </div>
            <div className="form-group">
              <label htmlFor="inputName">Guardian First Name</label>
              <input type="text" name="fname" className="form-control" id="input_gf_Name" placeholder="Enter First Name" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Guardian Last Name</label>
              <input type="text" name="lname" className="form-control" id="input_gl_Name" placeholder="Enter Last Name" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="inputName"> Guardian Primary Contact Number</label>
              <input type="text" name="" className="form-control" id="input_gl_number" placeholder=" Enter Contact Number" onChange={handleChange} />
       </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Guardian Email</label>
              <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
                                 
              <input type="email" name="email" className="form-control" id="input_g_Email" placeholder="Guardian email" onChange={handleChange} />
            </div>
         </div>
         <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Teacher Details</h3>
        </div> 
        <div class="form-group">
                     <label>Salutation</label>
                                          <select class="custom-select">
                                             <option>Dr.</option>
                                             <option>Mr.</option>
                                             <option>Mrs.</option>
                                             <option>Prof.</option>
                                         </select>
        </div>
        <div className="form-group">
              <label htmlFor="inputName">Teacher Name</label>
              <input type="text" name="teacher_name" className="form-control" id="teacher_Name" placeholder="Enter Teacher Name" onChange={handleChange} />
        </div>
        <div className="form-group">
              <label htmlFor="inputEmail">Teacher Email</label>
              <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="email" name="email" className="form-control" id="teacher_email" placeholder="Teacher Email" onChange={handleChange} />
        </div>
        <div className="form-group">
              <label htmlFor="inputName">Teacher Mobile Number 1</label>
              <input type="text" name="lname" className="form-control" id="inputlName" placeholder=" Enter Teacher Mobile Number" onChange={handleChange} />
       </div>
       
        </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
        </div>
        <div class="col-md-6">
        <div class="card card-primary">
        <div class="card-header">
            <h3 class="card-title">Image Upload</h3>
        </div> 
        <div class="form-group">
        <label htmlFor="inputName">ICard Image</label>
            <div className="wrapper">
               <ImageUpload image_id=''/>
            </div>
         </div>
        <form>
       
        </form> 
        </div>
        
        </div>
        
        </div>
        
        </div>
        
        </section>   

        
        
        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
               <b>Version</b> 3.2.0
            </div>
            <strong>Copyright &copy; 2014-2023 <a href="http://rvssgroup.com/">RVSS</a>.</strong> All rights reserved.
         </footer>
         <aside class="control-sidebar control-sidebar-dark">
         </aside>
    </div>

           </div>
        </div>
      <script src="../../plugins/jquery/jquery.min.js"></script>
      <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="../../plugins/select2/js/select2.full.min.js"></script>
      <script src="../../plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>
      <script src="../../plugins/moment/moment.min.js"></script>
      <script src="../../plugins/inputmask/jquery.inputmask.min.js"></script>
      <script src="../../plugins/daterangepicker/daterangepicker.js"></script>
      <script src="../../plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
      <script src="../../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
      <script src="../../plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
      <script src="../../plugins/bs-stepper/js/bs-stepper.min.js"></script>
      <script src="../../plugins/dropzone/min/dropzone.min.js"></script>
      <script src="../../dist/js/adminlte.min.js?v=3.2.0"></script>
      <script src="../../dist/js/demo.js"></script>
      
      <script>
         function render(){

         }
      </script>
    
    </body>
    
     
   
    );
  }
  
  export default AdminLteForm;
  


