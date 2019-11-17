import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { QuestionServiceService } from '../../service/question-service.service';
import { Question } from '../../model/question';
import { Location } from "@angular/common";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  private displayedColumns: String[] = ['question', 'questiontype', 'status'];
  private dataSource;

  assignmentID: any;

  constructor(private location: Location,
    private questionService: QuestionServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Inside Question Student component");
    this.assignmentID = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    let email = localStorage.getItem('userEmail');
    this.questionService.getQuestions(this.assignmentID, email).subscribe((data: any) => {
      if (data && data != undefined && data.length) {
        for (var each = 0; each < data.length; each++) {
            if (data[each].isSolved == true) {
              data[each]["status"] = "Complete";
            } else {
              data[each]["status"] = "Incomplete";
            }
         }
        this.dataSource = new MatTableDataSource<Question>(data);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
