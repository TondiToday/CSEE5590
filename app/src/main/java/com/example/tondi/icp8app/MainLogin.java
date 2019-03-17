package com.example.tondi.icp8app;

import android.content.Intent;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainLogin extends AppCompatActivity {

    private EditText Name;
    private EditText Password;
    private Button Login;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_login);

        Name = (EditText)findViewById(R.id.username);
        Password = (EditText)findViewById(R.id.password);
        Login = (Button)findViewById(R.id.login);

        Login.setOnClickListener(new View.OnClickListener(){
         public void onClick(View view){
             Log.e("Name",Name.getText().toString());
             Log.e("Password", Password.getText().toString());
             checker(Name.getText().toString(), Password.getText().toString());

         }
        });

    }

    private void checker(String userName, String userPassword){
        if(userName.equals("admin") && userPassword.equals("password")){
            Intent intent = new Intent(MainLogin.this, MainPage.class);
            startActivity(intent);
        }
        else{
            AlertDialog.Builder newAlert = new AlertDialog.Builder(this);
            newAlert.setMessage("wrong username or password");
            newAlert.setTitle("error message");
            newAlert.setPositiveButton("OK", null);
            newAlert.setCancelable(true);
            newAlert.create().show();


        }
    }
}
