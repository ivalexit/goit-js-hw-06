function showThis() {
    console.log(this);
  }
  
  const user = {
    name: "Олексій",
    showContext: showThis, // Присвоїли функцію
  };
  
  user.showContext();
