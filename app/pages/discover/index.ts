import {Component} from "@angular/core";
import {ExamListPage} from "./exam-list/index";
import {NavController, Platform} from "ionic-angular/index";
import {RecommendBook} from "./recommend-books/index";
import {RecommendArticles} from "./recommend-articles/index";
import {TWBookPage} from "./thoughtworks-books/index";
import {ToolboxListPage} from "./toolbox-list/index";
import {SolutionPage} from "./solution/index";
import {TodoListsPage} from "./todo-lists/index";
import {ArticleListPage} from "./article-list/index";
import {RoadMapPage} from "./roadmap-list/index";
import {ProjectListPage} from "./project-list/index";

@Component({
  templateUrl: "build/pages/discover/index.html"
})
export class DiscoverPage {
  private slideOptions = {
    initialSlide: 0,
    autoplay: 3000,
    loop: true
  };

  constructor(public nav:NavController, private platform:Platform) {
    this.nav = nav;
    this.platform = platform;
  }

  openExamPage() {
    this.nav.push(ExamListPage);
  }

  openSolutionPage() {
    this.nav.push(SolutionPage);
  }

  openRecommendBookPage() {
    this.nav.push(RecommendBook);
  }

  openRecommendArticlePage() {
    this.nav.push(RecommendArticles);
  }

  openThoughtWorksBookPage() {
    this.nav.push(TWBookPage);
  }

  openToolboxListPage() {
    this.nav.push(ToolboxListPage);
  }

  openArticlesListPage() {
    this.nav.push(ArticleListPage);
  }

  openTodoListsPage() {
    this.nav.push(TodoListsPage);
  }

  openRoadMapPage() {
    this.nav.push(RoadMapPage);
  }

  openProjectListPage() {
    this.nav.push(ProjectListPage);
  }

  launch(url) {
    this.platform.ready().then(() => {
      window.open(url, "_system", "location=true");
    });
  }
}
