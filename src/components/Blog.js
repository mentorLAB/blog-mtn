import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Formated from './subcomponents/Formated';
//remove
import axios from 'axios';


class Blog extends Component{
    constructor(){
        super();
        this.state = {
            blog: {
                id: 4,
                title: "The Title Goes Here",
                subTitle: "A longer title of sorts that is more descriptive would be placed here.",
                imgUrl: 'https://unsplash.it/600/400/?random',
                text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam possimus veritatis molestiae in vitae at labore sapiente obcaecati impedit. Placeat aperiam ducimus rem rerum asperiores autem excepturi consequuntur accusantium harum?
                Eos aut officia dignissimos, eaque blanditiis libero error beatae dicta placeat. Aut nemo reprehenderit deleniti maxime! Totam expedita quaerat debitis, itaque alias esse adipisci, nostrum laboriosam, blanditiis eum tenetur! Possimus.
                Cupiditate sunt nisi ipsam neque sit reiciendis explicabo voluptates, incidunt sequi commodi vitae qui, eaque itaque quisquam vero enim, tempore ducimus repellendus dignissimos distinctio? Adipisci similique alias beatae mollitia molestiae.
                Voluptatum impedit ut ullam! Culpa quasi officiis illo tempora provident ad assumenda, placeat veniam sit nesciunt voluptatum repellendus eveniet eum, necessitatibus odit eaque! Consequatur mollitia culpa perspiciatis magnam tempora sequi.
                \n
                Ipsa laborum officiis omnis mollitia ad quaerat nihil. Ab voluptate sequi sit quos nisi recusandae, expedita dolorem reiciendis dicta, perferendis commodi, a ea omnis optio! Deleniti, veniam voluptatem? Totam, harum.
                Suscipit alias temporibus iusto, reiciendis iste qui nisi quam expedita fugiat facilis, odit vero velit! Consequuntur et labore iure! Quae saepe explicabo incidunt commodi aliquam id. Dolorum temporibus perferendis vel.
                Deserunt itaque soluta nesciunt enim autem amet esse saepe vitae architecto libero quia nam possimus atque aliquid ipsum error et debitis, at eveniet veritatis inventore necessitatibus eligendi culpa! Accusamus, quis.
                Vitae illum sequi perferendis suscipit illo maiores excepturi repudiandae quas sapiente. Qui ad numquam esse laudantium, quia distinctio, aspernatur consequatur vel repellendus dolore natus, similique dignissimos eius. Eum, blanditiis quo!
                Nostrum corrupti eius, maiores omnis rem, sint eligendi laboriosam deleniti ullam autem odio, dolore iusto esse! Laborum voluptas ipsa provident atque ullam rem exercitationem ea qui ipsam, sapiente alias iure.
                Maxime, commodi fugit sunt sequi, nam hic esse corrupti expedita maiores explicabo ullam dolorem deleniti saepe blanditiis voluptatum officiis reiciendis dicta repellat dolore dignissimos quidem! Aliquam voluptas quos ipsam blanditiis.
                Expedita, asperiores a nostrum vero, rerum recusandae magnam, quia corrupti id nam esse atque neque dolorem fuga repellat in nisi harum quaerat. Officia quam culpa consectetur vel consequatur veritatis aperiam.
                Totam ipsa sapiente rem suscipit autem voluptas eveniet cupiditate error, quasi culpa, molestiae recusandae nam aliquam. Nostrum est, corrupti explicabo asperiores molestias voluptatem iure nesciunt! Perspiciatis, excepturi! Voluptate, et. Sunt.
                Vitae illo autem, eius fugit quidem nostrum, natus nobis fuga, rem inventore at cum dolore ipsa molestias ab. Quae voluptate culpa quibusdam iure nemo dolore id commodi nulla perferendis ex?
                Eum, velit esse eveniet mollitia deserunt vitae veritatis. Sint consectetur vel neque minus nemo beatae libero ducimus aliquid facere ab consequuntur esse tempora tempore, voluptatem, quos recusandae, voluptatum exercitationem officia!
                Eaque non illo temporibus! Consequuntur repellat in illo pariatur qui, officia excepturi minus maiores cupiditate explicabo dolorem hic rem, aperiam assumenda a aut perspiciatis perferendis! Impedit laborum eos corporis neque.
                Rerum, optio impedit? Itaque ad nam libero, praesentium ipsum quidem eaque odio laboriosam dolores ea animi? Quae suscipit vel ea praesentium veritatis minima quia tempore architecto, repellendus repudiandae, neque corporis!
                Deserunt aspernatur inventore temporibus quidem ut impedit delectus illo fugit quos harum eius atque quaerat fugiat libero, enim voluptates tempore distinctio minus. Sed, qui labore nemo aut harum porro eveniet?
                Modi placeat ex optio officiis deserunt laudantium, quaerat voluptates, quisquam odio aut sint dolore, error dolorem quis unde ipsa repudiandae nam corrupti vel. Quisquam quo quos sed consectetur, tenetur ab?
                Harum ullam dolores tempora fugit temporibus necessitatibus officiis esse quis qui sunt maxime labore eligendi, ab possimus expedita quas natus incidunt! Adipisci delectus laudantium totam sint aspernatur fuga quod quaerat.
                \n
                Blanditiis impedit voluptatem facere vel sint, quo laboriosam? Similique aliquam harum aspernatur provident eum facere est consequatur vero laudantium obcaecati inventore, molestiae, sed dolorem perspiciatis laboriosam repudiandae! Officia, dolorem ducimus.
                Voluptas laboriosam, excepturi quibusdam nostrum aperiam neque velit eveniet necessitatibus consequatur! Itaque repudiandae velit expedita corporis eligendi maxime repellat porro cum quibusdam ipsa aliquid, molestias ipsum ratione quas dolorum unde.
                Animi saepe quam itaque accusantium voluptate id. Amet, dignissimos inventore sapiente laudantium nihil velit deleniti, maxime earum numquam sequi tempora iure. Labore nobis eveniet dolorem quasi deleniti odio atque itaque.
                Ratione, deserunt provident expedita necessitatibus minima, sint ipsam est facere voluptatum soluta sunt in distinctio minus esse incidunt quam. Beatae deleniti earum a dicta. Placeat perferendis reprehenderit quas officia sunt!
                Magni asperiores alias tenetur eveniet sint qui, sed dolor itaque nemo tempora sequi odio atque ipsa explicabo fugiat culpa suscipit hic necessitatibus iste tempore. Id labore amet commodi minus necessitatibus!
                Necessitatibus nesciunt voluptas ipsum. Illum iste a laborum voluptatem facere exercitationem, distinctio consectetur consequatur laudantium aliquam nulla optio itaque aspernatur molestias eligendi doloremque cumque at labore possimus culpa odio enim!
                Alias consequuntur quibusdam vitae sunt voluptatibus repudiandae voluptate quas velit at ea aliquam soluta necessitatibus cupiditate tempora provident voluptatum beatae, eveniet reiciendis officia quam animi odit nesciunt maiores eum. Obcaecati.
                Blanditiis commodi cupiditate facere consequatur magni adipisci, iure vitae minima reprehenderit beatae temporibus illo qui velit id voluptatibus delectus error nulla, maiores nemo totam officia? Quidem pariatur voluptas numquam nemo!
                Deserunt voluptas delectus libero ducimus earum, minima sed possimus cum molestiae distinctio quo, fugit aut temporibus eius porro mollitia ullam! Non odit nemo perspiciatis ipsum repudiandae voluptatum pariatur, asperiores tenetur.
                Animi molestiae mollitia minima perferendis consequuntur debitis dolor quae labore quia quos accusamus rem, autem voluptates ea, hic officia eos quis numquam cupiditate fugit similique. Asperiores recusandae doloribus sapiente! Quas.
                Cum amet id, tempore ducimus neque cumque quia explicabo fugiat, iste rem ea quaerat facilis reprehenderit consequatur. Quis, impedit. Reiciendis expedita, voluptate quos ad pariatur eius quidem non dolores! Repellat.
                Architecto incidunt vero animi maiores recusandae necessitatibus, labore vitae amet repellat aspernatur cum. In aut nam quo deserunt ipsam voluptates nostrum accusantium! Illum voluptatibus consectetur vero rem repudiandae quia odit.
                Repellat culpa minima similique iusto earum nemo nulla qui sint praesentium ipsa nesciunt quasi minus quae ipsam, eius deleniti eum corrupti doloribus maiores? Iure aliquam libero hic aliquid error iusto.
                Accusamus rerum aut illo labore nulla sequi sint repellendus optio ex at excepturi ratione architecto voluptatibus similique commodi, voluptatum eveniet facilis cum esse eius laborum. Facere, veniam ea. Impedit, quis.
                \n\n\nSaepe exercitationem voluptatibus doloribus dicta alias facilis eaque magni, repellat pariatur distinctio fuga maiores dolorem nihil corporis. Harum quasi ipsa, expedita, cupiditate illum, consequuntur autem facilis suscipit laborum nam veritatis.
                Rem fuga eos, fugiat laboriosam placeat quis sequi facilis enim itaque repellendus eligendi eveniet excepturi nesciunt ipsam vitae natus. Nulla rem sint dolores quam ducimus esse obcaecati quo provident minus.
                Voluptate, dolore? Adipisci cum, voluptate provident quisquam illum esse. Est, quibusdam consequuntur quae dolore aspernatur ratione numquam. Odit, ipsa! Quisquam labore quos fugit deleniti nulla autem! Recusandae nisi fugit sint.
                Ipsum amet ad nemo officiis vitae repellendus consectetur laboriosam, ipsa quidem praesentium provident, ut magni doloribus quibusdam, autem voluptatem veritatis eos unde nam odio. Aspernatur praesentium dolores laudantium dolor quasi.
                Eos reiciendis odit enim hic laborum placeat sit asperiores, debitis sed. Tempora accusantium ullam, possimus officiis labore dolore dicta, commodi necessitatibus blanditiis omnis corrupti fuga molestiae. Architecto iste sint adipisci?
                Nisi pariatur, commodi recusandae ut quidem non veritatis, magni reprehenderit tenetur consectetur accusantium aut placeat reiciendis excepturi quibusdam? Ullam corporis eius vel delectus suscipit maiores blanditiis laborum ipsam accusamus nisi!
                Harum temporibus dolore illo id cum, numquam ipsum illum quod commodi reiciendis esse sit debitis ullam molestiae modi cumque eos adipisci? Quod quas unde aliquid autem enim dolor ex officia.`
            }
        }
    }

    //insert a componentDidMount method with an axios call to the the data:
    //remove:
    componentDidMount(){
        axios.get(`/api/blog/${this.props.match.params.id}`).then(response=>{
            console.log(response.data);
            this.setState({
                blog: response.data
            })
        })
    }
    
    render(){
        const blog = this.state.blog;
        return(
            <div className='content blog-content' >
                    <div className="blog-img" style={{backgroundImage: `url(${blog.imgUrl})`, backgroundSize:'cover'}}>
                        <h1>{blog.title}</h1>
                    </div>
                <div className="blog-container">
                    <h2>{blog.subTitle}</h2>
                    <hr/><br/>
                    <Formated text={blog.text}/>
                </div>
                <Link to={`/edit/${blog.id}`} >
                <button>Edit</button>
                </Link>
                <br/>
            </div>
        )
    }
}

export default Blog;