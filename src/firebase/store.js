import firestore from '@react-native-firebase/firestore';

export async function getUserData(email)
{
    const user = await firestore().collection(email).doc(email+'_userdata').get();
    const todo = await firestore().collection(email).doc(email+'_todo').get();
    return {user, todo};
}

export async function setUserData(email, data)
{

    await firestore()
        .collection(email)
        .doc(email+'_userdata')
        .set({
                firstName:data.firstName,
                lastName:data.lastName,
                age: data.age,
                gender: data.gender
            });
}

export function writeTasks(email, todo)
{
    let data = JSON.stringify(todo)

    firestore()
        .collection(email)
        .doc(email+'_todo')
        .set({
                Todo:data
            });
}