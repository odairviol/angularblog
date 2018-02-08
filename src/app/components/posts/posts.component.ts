import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../providers/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  loading: boolean = true; // já começara com estado 'carregando'
  posts: any[];

  constructor(public blog: BlogService) { }

  ngOnInit() {
      // aqui vamos chamar o método posts do provider/serviço blog que criamos anteriormente
      // que quando for resolvido retornará um array (lista) de posts do tipo any
      this.blog.posts().then((posts: any[]) => { // acessamos this.blog pois instanciamos no constructor desta classe a variável blog do tipo BlogService
      setTimeout (() => { // damos um tempo pra exibir o resultado no template
        this.posts = posts; // ligamos o resultado na view (template)
        this.loading = false; // paramos o carregamento
      }, 1 * 1000 ) // define o tempo de carregamento pra 1 segundo
    })
  }
}

