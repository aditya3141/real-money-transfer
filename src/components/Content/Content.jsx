// const Content= ({badge,className,titleClass,image,title,category,text}) => {
//     return (
       
// <div>


// {badge? <span className="badge {className}>  {text}</span>:null }
//   <span className="badge {{args.badge.class}}"> args.badge.text</span>

//   <div className="content">
//     <div className="content-text-block">
//       <h2 className="content-title heading-md "" + {titleClass}>
//       args.title | safe
//       </h2>
//       args.text | safe
//     </div>
//   % if args.divider%
//     <div className="content-divider" />
//    % endif %
//     % if args.list %
//     <div className="content-list-block">
//       <ul className="content-list">
//         % for list_item in args.list.items %
//         <li className="content-list-item">
//           % if args.list.bullet_image%
//           <img src="./image/icons/{{args.list.bullet_image}}" alt="alternative text" />
//           % endif %
//          list_item
//         </li>
//         % endfor%
//       </ul>
//     </div>
//     % endif %
//     % if args.button %
//     <div className="content-button-block">
//       <a href="{{' ' +args.button.url}}" className="btn-masco{{' ' + args.button.class}}"><span>args.button.text</span></a>
//     </div>
//     % endif %
//   </div>
//   )
//   }
// </div>

// export default Content;