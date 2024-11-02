import React from 'react'

const About = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#ecf0f1', // Light gray background
      color: '#2c3e50', // Dark blue text
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      margin: '10px 0',
    },
    description: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      margin: '10px 0',
    },
    image: {
      width: '100%',
      maxWidth: '400px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '20px 0',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#2c3e50', // Dark blue
      color: '#ecf0f1', // Light gray
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#34495e', // Slightly lighter blue on hover
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <img 
        src="https://via.placeholder.com/400" 
        alt="About Us" 
        style={styles.image} 
      />
      <p style={styles.description}>
        Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate about what we do and we strive to exceed your expectations. 
        Here, you can learn more about our mission, values, and the amazing people behind our success.
      </p>
      <button 
        style={styles.button} 
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
      >
        Learn More
      </button>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptates ipsum aperiam alias, soluta error deleniti perspiciatis tempore? Recusandae alias quos nostrum eligendi commodi necessitatibus dolorem iusto qui praesentium veniam. Mollitia officia optio voluptatem. Voluptatem hic illum consectetur beatae. Corporis qui dolorum tenetur ullam nostrum temporibus placeat sapiente accusamus doloremque repellat beatae voluptatum, eligendi molestias, enim quae. Sequi cumque, quo, tempore voluptatum suscipit nulla velit sint explicabo laboriosam aspernatur a perspiciatis numquam ratione fuga fugit soluta aliquid maxime. Velit obcaecati tempora minus doloribus aperiam repellat ducimus facere quas in. Omnis, corporis ducimus reprehenderit officiis odit odio illum. Libero sed, fugit animi, cum fuga harum officiis ipsam temporibus maiores dolorum, adipisci et rerum a. Totam accusantium architecto atque earum! Consequatur vero repudiandae at. Fugiat debitis ipsa, totam ut aliquam voluptates distinctio velit voluptate soluta perspiciatis modi excepturi commodi, expedita dicta dolores voluptas eum, neque cupiditate necessitatibus ab tempora suscipit architecto. Voluptas repellat asperiores tempore? Laborum, et? Nulla rem ex exercitationem eius fugiat quaerat earum eum dolore possimus nesciunt reiciendis, neque sapiente obcaecati quas amet minus omnis alias nemo voluptatibus saepe veniam voluptates ipsum distinctio. Odio natus ullam, iste ad at fugit porro dignissimos nisi quae vero explicabo corrupti! Facere perferendis laboriosam praesentium non officiis doloribus vitae quam autem sunt accusamus cum maiores, ex exercitationem aspernatur molestiae! Voluptatum cupiditate numquam reprehenderit repellendus explicabo quas eveniet. Voluptatibus maiores, inventore sit, fugiat nulla minus adipisci debitis ut ullam aspernatur quia delectus, eaque minima consequatur! Totam cumque, commodi fugit quae expedita vel culpa distinctio, ad numquam repudiandae itaque voluptas, beatae incidunt? Veniam perspiciatis quaerat atque aperiam hic cupiditate quod voluptates, repellat ipsum cum dignissimos a sequi, inventore quidem impedit ipsa earum ea? Accusamus repellat animi obcaecati, commodi voluptas nam quos reprehenderit unde cupiditate ipsa? Doloremque delectus dignissimos, vero omnis, laborum possimus quis inventore ipsam maxime est saepe alias corrupti accusantium dolore exercitationem dolorem expedita repellendus rem fuga aut iure. Dolores obcaecati nisi expedita quos porro minus fuga iure debitis reiciendis harum in labore temporibus, reprehenderit explicabo, dolorem nihil ipsa neque nemo, eligendi provident earum ut. Laborum officia nostrum a fugiat quisquam totam ea ullam aliquam vero aliquid, iusto recusandae est eius, sint magni at culpa debitis? Explicabo, possimus veritatis ex recusandae quia ullam sint perspiciatis repudiandae magnam. Possimus dicta, dolore quibusdam, et beatae ut libero molestias harum vel voluptas assumenda maxime itaque sunt, est natus laboriosam necessitatibus. Iure eius officiis alias, eligendi saepe ut assumenda non dignissimos dolore iusto at laboriosam. Ipsa, repellendus voluptas? Voluptas dolores debitis consequuntur id deleniti? Facere fuga aspernatur, suscipit quia nam totam iure ut esse praesentium veritatis enim laborum est delectus. Nemo quia, ipsum itaque magni reprehenderit veniam. Dolorum ducimus dolores rerum asperiores quas, possimus adipisci odit culpa alias veniam fuga dignissimos molestias necessitatibus facere, modi quod impedit sequi sint minus ipsa. Quisquam quibusdam voluptatem excepturi voluptate nihil cum libero porro nemo, ab necessitatibus officiis quas architecto facilis qui dolor soluta maiores molestiae ipsum repellendus quaerat illum animi. Est at vitae praesentium sequi quod corrupti laborum dolorem dolorum dignissimos. Sint quas omnis, doloribus modi nihil enim corrupti possimus qui dicta quo aperiam quos velit exercitationem nobis esse cum placeat vel sed necessitatibus beatae quibusdam in ipsa harum obcaecati? Nobis optio molestiae, quod vel amet laudantium aut aperiam illo cupiditate esse eaque, incidunt maxime, reprehenderit cum. Illo nulla explicabo optio amet totam quae repudiandae animi aliquid recusandae sint fugit laborum, aspernatur odio excepturi ullam eum a quas suscipit dolores voluptatibus ex consequuntur. Deserunt animi recusandae aliquid nemo tenetur omnis, magnam aut, distinctio veritatis sint doloremque, aspernatur beatae. Dolorem, illo iure laborum, perspiciatis rerum reprehenderit sit quis officiis magni earum ab fugiat eum? Voluptatum, quas quod. Facilis culpa eum nemo deleniti officiis molestiae sapiente ratione voluptatibus earum suscipit itaque, aliquid obcaecati, amet, ex similique maxime! Quasi at doloribus dignissimos maxime rem dolore officiis maiores est ut id quae hic voluptatum atque quam minus magni dicta adipisci, dolor voluptatem temporibus harum? Reiciendis eveniet atque cupiditate consequuntur quae laborum veniam magni porro, rerum perferendis distinctio officiis officia tempore autem dolorem ullam temporibus, ipsam nisi sed praesentium corrupti omnis. Vitae dolores facilis quia ipsum rem sunt repellat dolor consectetur officia provident pariatur recusandae consequuntur omnis dicta neque et, quos consequatur ratione dolorum! Quaerat explicabo, numquam sint facilis recusandae doloremque minima sit quas repellat illo non expedita iure id, perferendis, unde perspiciatis pariatur modi iusto eum! Dolore eos, nemo perspiciatis veniam assumenda culpa ab suscipit doloribus mollitia temporibus impedit, aperiam, facere saepe. Alias repellat, aut explicabo corrupti repudiandae tenetur accusantium dolorem porro? Ex cum eius laudantium esse iste rem magni nam id facilis illo explicabo doloremque, numquam obcaecati incidunt ut consequatur molestias maiores enim sequi a. Ab doloribus natus nihil cupiditate delectus culpa architecto ut voluptates sit pariatur vel dicta molestias reiciendis repudiandae explicabo, aperiam exercitationem vitae voluptatibus et quasi ipsum libero quis suscipit aspernatur. Harum inventore fugit reprehenderit dolores at accusantium! Possimus incidunt magni dignissimos nostrum eos nulla, culpa laboriosam facilis numquam, nisi aspernatur debitis? Non aspernatur dolores velit enim quia sint quibusdam ullam quo earum? Voluptatum veritatis vero porro consectetur, ex velit quisquam. Dicta iure architecto asperiores enim. Sequi consectetur saepe, quis rerum accusamus nisi assumenda eveniet blanditiis necessitatibus similique rem, nemo molestiae deserunt, iusto at laboriosam facere corrupti dolores voluptatum. Quidem, amet recusandae! Similique, itaque. Sed, porro. Harum quia sed maxime beatae nulla tenetur, ut vel corporis voluptatibus doloribus accusantium magnam laudantium incidunt dicta laborum ad. Iure voluptatum laboriosam quo aut corrupti id illum soluta in ut. Assumenda nostrum nihil atque eveniet laboriosam magni! Dolores odio perspiciatis et, similique distinctio blanditiis, eius dicta neque ullam earum nobis. Enim, earum repudiandae. Qui possimus similique aspernatur delectus iste maxime modi assumenda tenetur ullam, et quaerat, debitis cum, odit deleniti inventore odio! Velit obcaecati, molestiae ipsum nemo rerum minima assumenda fugit, quae rem amet debitis hic pariatur magni ab, est ratione odit eligendi optio quaerat. Officiis cum ab id facilis dolorum? Reprehenderit eligendi obcaecati consectetur temporibus eaque? Corrupti cumque, hic asperiores voluptate consectetur veniam atque reiciendis magni ducimus nesciunt architecto nam quibusdam ea, minus quo deleniti vero quas animi accusamus numquam quia quos! Facere aut consequatur corporis eaque obcaecati odit eius consequuntur delectus possimus architecto enim dolores excepturi, quidem quis cupiditate officiis accusamus ut alias reprehenderit aspernatur provident nemo, temporibus laboriosam consectetur. Magni est assumenda facere mollitia quisquam necessitatibus, dolore eos officia impedit numquam explicabo fugit animi voluptatem aspernatur eaque omnis soluta quidem nobis excepturi dolor eum quod veritatis expedita minima. Veniam, possimus. Natus quos porro culpa autem error ducimus dolorum debitis, animi, deserunt maiores numquam amet rerum quidem consequatur est ex repellat minima officiis fuga. Earum aperiam excepturi qui modi, quo doloremque doloribus esse ex incidunt officia facilis, commodi tempora sed adipisci dolor asperiores assumenda possimus accusamus expedita dolores. Veritatis fuga accusantium dolores, numquam laboriosam quis inventore quidem enim accusamus distinctio, quos ad ratione saepe? Commodi magnam ea eius incidunt temporibus eaque sint, voluptates amet similique a quasi accusantium libero aperiam! Ratione perspiciatis odit quaerat recusandae harum, suscipit laudantium accusantium laboriosam voluptatibus tempora nihil modi eius vitae sint laborum pariatur veniam minima praesentium sequi nisi reiciendis. Tempora autem quidem itaque, minus dolore consequatur, eveniet corrupti explicabo nemo eum similique ipsum eligendi dicta obcaecati alias ratione, sequi consectetur ad. Sint odit veniam fugit officiis, velit, earum assumenda corporis hic libero eaque voluptatibus! Ipsum, veniam dolorum. Distinctio eum rem, obcaecati blanditiis odit dolore tempore non architecto velit consequatur doloremque veniam aspernatur magnam similique ullam quaerat, officia cupiditate voluptatem accusamus at! Nihil sapiente neque libero tempora! Iusto impedit atque ut, harum fuga accusamus, temporibus excepturi optio ipsam ratione aliquid molestias laborum inventore mollitia aut necessitatibus repellendus ea expedita nobis sunt? Cupiditate, perferendis sapiente! Sequi voluptatum corporis eius perspiciatis? Eveniet exercitationem ullam laudantium voluptatem minima architecto dolore cum aspernatur aperiam nulla, reprehenderit voluptas cumque ex repellendus mollitia tenetur dolores repellat. Labore corrupti facere iusto, eveniet voluptas voluptates impedit eligendi eaque ducimus sapiente aperiam mollitia, omnis incidunt perferendis. Nisi, aliquid libero, deleniti est veritatis necessitatibus repudiandae magnam recusandae suscipit explicabo corrupti voluptatem modi minima laudantium. Praesentium quas facere dolores est libero nihil in deleniti omnis. Dolorem velit corrupti impedit dicta dolorum, blanditiis in. Corrupti explicabo alias quisquam fugiat quae cumque nisi sit enim! Illum enim corrupti voluptatem neque rem laborum perferendis repudiandae ratione ex provident fugiat, cumque natus itaque tempora non nobis unde quas et quod adipisci sit architecto eligendi. Quisquam unde minus eum quis quia ipsa quasi veniam, consequuntur cumque vel aperiam praesentium quaerat reprehenderit deleniti nihil provident dignissimos rem dolore sunt suscipit commodi accusantium repellendus sapiente! Consequuntur a harum quaerat exercitationem? Animi magni mollitia sequi debitis maxime nulla esse rerum tenetur tempore, fugiat provident architecto deserunt consequatur neque dolorem? Magni, asperiores officia! Eos voluptates voluptatum impedit, provident, repudiandae obcaecati ullam nostrum aliquid consectetur nesciunt quasi commodi at molestiae eligendi? Laborum facere ducimus tempore maiores ex optio asperiores hic dolor delectus, corrupti maxime vero a fugiat, dignissimos nesciunt earum blanditiis voluptate sequi nobis dicta? Voluptatem, voluptatibus voluptatum cupiditate rerum enim repellat similique dicta eligendi provident vero nesciunt tenetur in quis tempore libero aperiam illum, ratione natus molestias iste incidunt? Exercitationem ex maxime nobis aspernatur tempora quia fuga? Officia debitis alias at esse tempore non fuga a ipsa voluptatibus voluptatum? Ducimus aut ex aliquid dolorum fugiat perferendis quas officiis quia ratione nulla expedita, dicta a. Doloremque molestiae laborum, suscipit corporis voluptatum aut, exercitationem facere dolor amet est aliquam sequi neque non labore culpa repudiandae, sed dolorem reiciendis. Expedita animi ratione quaerat qui recusandae magni quis dicta eum. Dolores sapiente soluta optio temporibus perspiciatis minus accusamus nihil magnam inventore deserunt eum adipisci obcaecati impedit nostrum ipsam laborum cum libero quibusdam alias eos ex, cupiditate molestiae quo? Consectetur repellat in iste laboriosam nemo ullam aliquam reprehenderit, fugit similique cum unde. Mollitia omnis assumenda, at consequuntur ut fugiat debitis qui quos sit non recusandae nam atque saepe dolorem praesentium illum. Amet saepe animi neque tempora voluptatum nemo molestiae. Amet atque laudantium natus velit cupiditate iure at cum totam, veritatis inventore repellat expedita provident quam, corporis fugiat vero aliquid! Eligendi unde molestias modi libero nulla voluptate accusamus, minima, fugit soluta, molestiae dolor quaerat consectetur! Voluptatum laborum quibusdam ullam, aspernatur aperiam recusandae at. Quam commodi, iusto veritatis nulla ex minima iure, atque laudantium cum quis labore? Corporis maiores ratione ducimus eveniet totam in debitis, perferendis velit asperiores? Quas cupiditate cumque iusto, quos quidem molestiae error eaque voluptate ipsam distinctio maiores qui! Recusandae reprehenderit odit similique harum quasi quos, voluptatem dignissimos nesciunt expedita id sed debitis quo, culpa laborum provident dolores pariatur dicta doloribus eum consequuntur atque voluptatum autem in? Atque, molestias! Quaerat quod veritatis deserunt repellat illo explicabo quos. Non et rem alias ex, aliquam deserunt voluptatum commodi dolorum, eveniet fuga, illo perspiciatis pariatur mollitia sed. Suscipit a enim ipsam non earum veritatis odit nemo accusamus, labore eum. Dolores, veritatis ipsa amet porro et veniam eius voluptatem autem, tempore, hic cum obcaecati rerum natus eos harum? Nam amet exercitationem cum ipsa quas veritatis quisquam vero voluptatem ullam. Dolorum sapiente numquam repellendus facilis, at odio animi reprehenderit beatae. At optio, cupiditate neque quam ab pariatur blanditiis aliquid. Aperiam ex voluptatem nobis. Quia repudiandae quibusdam libero consectetur possimus aut aliquid explicabo autem perspiciatis quidem. Vitae veniam laudantium iusto unde, exercitationem ipsa, vero iste laboriosam temporibus aperiam expedita corrupti. Veritatis excepturi cupiditate id, veniam nisi dicta explicabo repellat! Saepe doloremque veritatis porro dicta amet vel necessitatibus assumenda repellat esse repellendus nisi, blanditiis minima ipsam eligendi. Laboriosam repellat ipsa ab cupiditate quasi vel porro excepturi quae temporibus illum aut nemo aliquam voluptatibus necessitatibus nesciunt debitis beatae dolorum, tempora molestiae sapiente. Magnam modi animi dolore eligendi aliquid ipsum natus hic nobis doloremque suscipit itaque, quasi unde porro perspiciatis aliquam possimus dolor quod. Quis, veniam praesentium? Nihil quaerat placeat minus fugit optio quam id, sequi, distinctio asperiores in veniam nisi beatae, rerum error incidunt culpa dolor suscipit itaque recusandae rem? Animi enim deleniti omnis temporibus eveniet consectetur fugiat delectus ea excepturi, expedita fugit quae repellendus officia blanditiis. Ab perspiciatis recusandae ipsa quaerat facilis eaque sed optio temporibus pariatur sunt reprehenderit excepturi assumenda alias amet tenetur quas dolore, ea similique voluptates harum!</p>
    </div>
  );
}

export default About;