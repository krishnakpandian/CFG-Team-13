package com.example.demo.comparator;

import java.util.AbstractMap;
import java.util.Map;

public class Constants {

	// pays and ids

	// average starting pay sourced from https://www.studentsreview.com/salary_by_major.php3

	private final static Integer BIOLOGY_ID   = 1;

	private final static Double BIOLOGY_PAY   = 57000.00;

	private final static Integer BA_ID        = 2;

	private final static Double BA_PAY        = 63000.00;

	private final static Integer HEALTH_ID    = 3;

	private final static Double HEALTH_PAY    = 79000.00;

	private final static Integer LEGAL_ID     = 4;

	private final static Double LEGAL_PAY     = 58000.00;

	private final static Integer RELIGION_ID  = 5;

	private final static Double RELIGION_PAY  = 41000.00;

	private final static Integer COMM_ID      = 6;

	private final static Double COMM_PAY      = 46000.00;
	
	public final static Map <Integer, Double> payMap   = Map.of(
			BIOLOGY_ID,  BIOLOGY_PAY,
			BA_ID,       BA_PAY,
			HEALTH_ID,   HEALTH_PAY,
			LEGAL_ID,    LEGAL_PAY,
			RELIGION_ID, RELIGION_PAY,
			COMM_ID,     COMM_PAY
			);

	// work study amount

	public final static Double WORK_STUDY    = 5000.00;

	// scholarship ids and amounts

	private final static Integer S0   		 = 0;

	private final static Double S0_PAY        = 0.00;

	private final static Integer S1           = 1;

	private final static Double S1_PAY        = 1000.00;

	private final static Integer S2           = 2;

	private final static Double S2_PAY        = 2000.00;

	private final static Integer S3           = 3;

	private final static Double S3_PAY        = 3000.00;

	private final static Integer S4           = 4;

	private final static Double S4_PAY        = 4000.00;

	private final static Integer S5           = 5;

	private final static Double S5_PAY        = 5000.00;

	private final static Integer S6           = 6;

	private final static Double S6_PAY        = 6000.00;

	private final static Integer S7           = 7;

	private final static Double S7_PAY        = 7000.00;

	private final static Integer S8           = 8;

	private final static Double S8_PAY        = 8000.00;

	private final static Integer S9           = 9;

	private final static Double S9_PAY        = 90000.00;

	private final static Integer S10          = 10;

	private final static Double S10_PAY       = 10000.00;

	private final static Integer S11          = 11;

	private final static Double S11_PAY       = 11000.00;

	public final static Map <Integer, Double> scholarshipMap   = Map.ofEntries(
			new AbstractMap.SimpleEntry<Integer, Double>(S0,  S0_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S1,  S1_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S2,  S2_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S3,  S3_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S4,  S4_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S5,  S5_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S6,  S6_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S7,  S7_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S8,  S8_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S9,  S9_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S10, S10_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(S11, S11_PAY)
			);

	// fafsa


	private final static Integer F0   		 = 0;

	private final static Double F0_PAY        = 0000.00;
	
	private final static Integer F1           = 1;

	private final static Double F1_PAY        = 1000.00;

	private final static Integer F2           = 2;

	private final static Double F2_PAY        = 2000.00;

	private final static Integer F3           = 3;

	private final static Double F3_PAY        = 3000.00;

	private final static Integer F4           = 4;

	private final static Double F4_PAY        = 4000.00;

	private final static Integer F5           = 5;

	private final static Double F5_PAY        = 5000.00;

	private final static Integer F6           = 6;

	private final static Double F6_PAY        = 6000.00;
	
	public final static Map <Integer, Double> fafsaMap   = Map.ofEntries(
			new AbstractMap.SimpleEntry<Integer, Double>(F0,  F0_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(F1,  F1_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(F2,  F2_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(F3,  F3_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(F4,  F4_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(F5,  F5_PAY),
			new AbstractMap.SimpleEntry<Integer, Double>(F6,  F6_PAY));



	// tuition flat rates

	public final static Double PQ_TUITION    = 11000.00;

	public final static Double OTHER_TUITION = 32000.00;

}