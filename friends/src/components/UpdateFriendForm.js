// import React from 'react';

// function UpdateFriendForm(props) {

//     return (
//         <div className='friendsForm'>
//             <h2>Friend</h2>
//             <form onSubmit={ () => props.updateFriend(props.friend) }>
//                 <input
//                     type='text'
//                     name='id'
//                     placeholder='ID'
//                     onChange={props.handleChanges}
//                     value={props.friend.id}
//                 />
//                 <input 
//                     type='text'
//                     name='name'
//                     placeholder='Name'
//                     onChange={props.handleChanges}
//                     value={props.friend.name}
//                 />
//                 <input
//                  type='text'
//                     name='age'
//                     placeholder='Age'
//                     onChange={props.handleChanges}
//                     value={props.friend.age}
//                 />
//                 <input
//                     type='text'
//                     name='email'
//                     placeholder='Email'
//                     onChange={props.handleChanges}
//                     value={props.friend.email}
//                 />
//                 <div className='buttonCont'>
//                     <button type='submit'>Update Friend</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default UpdateFriendForm;