AuthRegisterCtrl.$inject = ['$auth', '$state'];

function AuthRegisterCtrl($auth, $state){
  this.user = {};

  function handleSubmit(){
    $auth.signup(this.user)
      .then(() => $state.go('login'));
  }
  this.handleSubmit = handleSubmit;
}
export default AuthRegisterCtrl;
