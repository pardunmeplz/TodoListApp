import firestore from '@react-native-firebase/firestore';

export async function getUserData(email)
{
    const user = (await firestore().collection(email).doc(email+'_userdata').get());
    return user;
}

export async function setUserData(email, data)
{

    firestore()
        .collection(email)
        .doc(email+'_userdata')
        .set({
                firstName:data.firstName,
                lastName:data.lastName,
                age: data.age,
                gender: data.gender
            });
}