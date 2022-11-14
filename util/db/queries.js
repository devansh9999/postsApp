const Post= require('../../Models/Post');
const User= require('../../Models/User');

async function createUser(email,username,password,salt){

    let user = await User.create({email:email,username:username,password:password,salt:salt});
    return user;
}

async function createPost(Description,userId){
    // console.log("here: "+Description);
    let task=await Post.create({Description:Description,UserId:userId});
    return task
}


async function myPosts(userId){

    return await Post.findAll({
        where:{
            UserId:userId
        }
    })

}

async function updatePost(postId,description){
    return Post.update({Description:description},{
        where:{
            id:postId
        }
    })
    // console.log("updated");

}

async function deletePost(postId){

    return await Post.destroy({
        where:{
            id:postId
        }
    })

}

async function findUser(username){

    return User.findOne(
        {
            where:{
                username:username
            }
        }
    )

}

async function findPost(postId){

    return Post.findOne(
        {
            where:{
                id:postId
            }
        }
    )

}


module.exports ={
    createUser,createPost,
    findUser,findPost,myPosts,deletePost,updatePost
}