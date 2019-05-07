package com.example.vijaya.myorder;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

public class Summary extends AppCompatActivity {
    private ListView lv;
    private ArrayList<String> arrayList;
    private String orderSummaryMessage;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_summary);
        orderSummaryMessage = getIntent().getExtras().getString("stuff");
        lv = (ListView) findViewById(R.id.dynamic);
        Log.i("order summary", orderSummaryMessage);

        arrayList = new ArrayList<String>();
        arrayList.add(orderSummaryMessage);
        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(
                this,
                android.R.layout.simple_list_item_1,
                arrayList);
        lv.setAdapter(arrayAdapter);

    }

    public void goBack(View view) {
        String orderSummaryMessage = getIntent().getStringExtra("EXTRA_ORDER_SUMMARY");
        Intent intent = new Intent(getBaseContext(), MainActivity.class);
        intent.putExtra("EXTRA_ORDER_SUMMARY", orderSummaryMessage);
        startActivity(intent);
    }
}
