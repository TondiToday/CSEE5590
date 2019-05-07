package com.example.vijaya.myorder;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private static final String MAIN_ACTIVITY_TAG = "MainActivity";
    final int COFFEE_PRICE = 5;
    final int WHIPPED_CREAM_PRICE = 1;
    final int CHOCOLATE_PRICE = 2;
    final int REESE_PIECE = 4;
    final int M_AND_M = 2;
    int quantity = 3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
       /* Button summary = (Button)findViewById(R.id.summary);
        summary.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v){
                startActivity(new Intent(MainActivity.this, Summary.class));

            }
        });*/
    }

    /**
     * This method is called when the order button is clicked.
     */
    public void submitOrder(View view) {

        // get user input
        EditText userInputNameView = (EditText) findViewById(R.id.user_input);
        String userInputName = userInputNameView.getText().toString();

        // check if whipped cream is selected
        CheckBox whippedCream = (CheckBox) findViewById(R.id.whipped_cream_checked);
        boolean hasWhippedCream = whippedCream.isChecked();

        // check if chocolate is selected
        CheckBox chocolate = (CheckBox) findViewById(R.id.chocolate_checked);
        boolean hasChocolate = chocolate.isChecked();

        // check if reeses pieces is selected
        CheckBox ReesePiece = (CheckBox) findViewById(R.id.reese_checked);
        boolean hasReese = ReesePiece.isChecked();

        // check if m&ms pieces is selected
        CheckBox MandMs = (CheckBox) findViewById(R.id.mandms_checked);
        boolean hasMandMs = MandMs.isChecked();

        // calculate and store the total price
        float totalPrice = calculatePrice(hasWhippedCream, hasChocolate, hasMandMs, hasReese);
        String orderSummaryMessage = createOrderSummary(userInputName, hasWhippedCream, hasChocolate, hasMandMs, hasReese, totalPrice);
        if(view.getId() == R.id.order){
            sendEmail(userInputName, orderSummaryMessage);}
            else{newIntent(orderSummaryMessage);}
        //switch (view.getId()) {
        //    case R.id.summary:
        //        Log.i("order summary 2",orderSummaryMessage);
        //        newIntent(orderSummaryMessage);
        //    case R.id.order:
        //        Log.i("order summary 1",orderSummaryMessage);
        //        sendEmail(userInputName, orderSummaryMessage);
        }



    public void newIntent(String string1){
        Intent sumintent = new Intent(MainActivity.this, Summary.class);
        sumintent.putExtra("stuff", string1);
        Log.i("string", string1);
        MainActivity.this.startActivity(sumintent);
    }

    public void sendEmail(String name, String output) {
        Log.i("Send email", "");

        String[] TO = {"tonditfk@gmail.com"};
        String[] CC = {"tondi@hotmail.com"};
        Intent emailIntent = new Intent(Intent.ACTION_SEND);
        emailIntent.setData(Uri.parse("mailto:"));
        emailIntent.setType("text/plain");


        emailIntent.putExtra(Intent.EXTRA_EMAIL, TO);
        emailIntent.putExtra(Intent.EXTRA_CC, CC);
        emailIntent.putExtra(Intent.EXTRA_SUBJECT, name + "'s Order");
        emailIntent.putExtra(Intent.EXTRA_TEXT,  output);

        try {
            startActivity(Intent.createChooser(emailIntent, "Send mail..."));
            finish();
            Log.i("Finished sending email.", "");
        } catch (android.content.ActivityNotFoundException ex) {
            Toast.makeText(MainActivity.this,
                    "There is no email client installed.", Toast.LENGTH_SHORT).show();
        }
    }

    private String boolToString(boolean bool) {
        return bool ? (getString(R.string.yes)) : (getString(R.string.no));
    }

    private String createOrderSummary(String userInputName, boolean hasWhippedCream, boolean hasChocolate, boolean hasReese, boolean hasMandMs, float price) {
        String orderSummaryMessage = getString(R.string.order_summary_name, userInputName) + "\n" +
                getString(R.string.order_summary_whipped_cream, boolToString(hasWhippedCream)) + "\n" +
                getString(R.string.order_summary_chocolate, boolToString(hasChocolate)) + "\n" +
                getString(R.string.order_summary_reese, boolToString(hasReese)) + "\n" +
                getString(R.string.order_summary_mandms, boolToString(hasMandMs)) + "\n" +
                getString(R.string.order_summary_quantity, quantity) + "\n" +
                getString(R.string.order_summary_total_price, price) + "\n" +
                getString(R.string.thank_you);
        Log.i("create order summary",orderSummaryMessage);
        return orderSummaryMessage;
    }

    /**
     * Method to calculate the total price
     *
     * @return total Price
     */
    private float calculatePrice(boolean hasWhippedCream, boolean hasChocolate, boolean hasReese, boolean hasMandMs) {
        int basePrice = COFFEE_PRICE;
        if (hasWhippedCream) {
            basePrice += WHIPPED_CREAM_PRICE;
        }
        if (hasChocolate) {
            basePrice += CHOCOLATE_PRICE;
        }
        if (hasReese) {
            basePrice += REESE_PIECE;
        }
        if (hasMandMs){
            basePrice += M_AND_M;
        }
        return quantity * basePrice;
    }

    /**
     * This method displays the given quantity value on the screen.
     */
    private void display(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_text_view);
        quantityTextView.setText("" + number);
    }

    /**
     * This method increments the quantity of coffee cups by one
     *
     * @param view on passes the view that we are working with to the method
     */

    public void increment(View view) {
        if (quantity < 100) {
            quantity = quantity + 1;
            display(quantity);
        } else {
            Log.i("MainActivity", "Please select less than one hundred cups of coffee");
            Context context = getApplicationContext();
            String lowerLimitToast = getString(R.string.too_much_coffee);
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, lowerLimitToast, duration);
            toast.show();
            return;
        }
    }

    /**
     * This method decrements the quantity of coffee cups by one
     *
     * @param view passes on the view that we are working with to the method
     */
    public void decrement(View view) {
        if (quantity > 1) {
            quantity = quantity - 1;
            display(quantity);
        } else {
            Log.i("MainActivity", "Please select atleast one cup of coffee");
            Context context = getApplicationContext();
            String upperLimitToast = getString(R.string.too_little_coffee);
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, upperLimitToast, duration);
            toast.show();
            return;
        }
    }
}