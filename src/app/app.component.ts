import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app'; 
  login:boolean = false;
  username:string ="";
  password:string ="";

  ngOnInit(): void {
    var cookie = this.getCookie("session");
    if(this.isActive(cookie)){
      this.login = true;
      this.username = cookie;
    }
  }

  setLogin(){
    if(this.username == "admin" && this.password=="1234"){
      this.login = true;
      this.setCookie("session",this.username, 1)
    }
  };

  closeSesion(){
    this.login=false;
    this.removeCookie("session");
  }

  setCookie(cname:string, cvalue:string, exdays:number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  removeCookie(cname:string) {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  isActive(user:string){
    console.log("La sesion de "+ user + " esta activa!")
    return (user == "admin");
  }


}


