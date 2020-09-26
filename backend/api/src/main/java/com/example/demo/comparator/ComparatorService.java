package com.example.demo.comparator;


import java.text.DecimalFormat;

import org.springframework.stereotype.Service;

@Service
public class ComparatorService {
	
	// takes flat rate tuition, scholarships, projected post school pay, fafsa grants and loans
	// to estimate yearly loan pay and debt at Quinn vs Avg Private College
	public ComparatorReturnDto calculate(ComparatorDto dto) {
		ComparatorReturnDto returnDto = new ComparatorReturnDto();
		// read values
		Double fafsa = Constants.fafsaMap.get(dto.getFafsa());
		Integer loan = dto.getLoan();
		Double scholarship = Constants.scholarshipMap.get(dto.getScholarship());
		Double pay = Constants.payMap.get(dto.getMajorId());
		Double workstudy;
		if (dto.getWorkStudy()) {
			workstudy = Constants.WORK_STUDY;
		}
		else {
			workstudy = 0.00;
		}
		
		// calculate
		Double totalCostPQ = Constants.PQ_TUITION * 4;
		Double totalCostOther = Constants.OTHER_TUITION * 4;
		
		
		// total 4 year cost minus 4 year scholarships, workstudy, fafsa grants
		totalCostPQ -= ((fafsa + scholarship + workstudy) * 4);
		
		totalCostPQ = totalCostPQ > 0 ? totalCostPQ : 0;
		
		
		// total cost other minus 4 year scholarships +fafsa grants. workstudy assuemd not available. 
		totalCostOther -= ((fafsa + scholarship) * 4);
		
		totalCostOther = totalCostOther > 0 ? totalCostOther : 0;
		
		System.out.println(loan);
		// years to pay off 
		
		Double yearlyRate           = (pay * ((double) loan/100));
		
		Integer yearsToPayPQ        = (int) Math.ceil(totalCostPQ / yearlyRate);
		
		Integer yearsToPayOther     = (int) Math.ceil(totalCostOther / yearlyRate);
		
		Double monthlyRate          = yearlyRate / 12;
		
		// round to two decimal point
		DecimalFormat df = new DecimalFormat("#.##");      
		monthlyRate = Double.valueOf(df.format(monthlyRate)); 
		totalCostOther = Double.valueOf(df.format(totalCostOther));
		totalCostPQ = Double.valueOf(df.format(totalCostPQ));
		
		
		returnDto.setPay(pay);
		returnDto.setMonthlyRate(monthlyRate);
		returnDto.setOtherASD(totalCostOther);
		returnDto.setQuinnASD(totalCostPQ);
		returnDto.setOtherYTP(yearsToPayOther);
		returnDto.setQuinnYTP(yearsToPayPQ);
		
		return returnDto;
	}
}
