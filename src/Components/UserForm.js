import React, { useState } from "react";
import { Text } from "react-native";
import {
  Button,
  Input,
  Center,
  VStack,
  HStack,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Modal,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { validateEmail, validatePassword } from "../utils/FormValidation";
import { useToast } from "native-base";
import { login } from "../utils/api-call/loginRegister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { UserContext } from "../utils/context/UserContext";
import { useContext } from "react";

const UserForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toast = useToast();
  const navigation = useNavigation();

  const { user, setUser, isLogged, setIsLogged } = useContext(UserContext);

  const handleSignUp = () => {
    if (signUpEmail) {
      if (!validateEmail(signUpEmail)) {
        setEmailError("Email invalide");
      } else {
        setEmailError("");
      }
    }

    if (signUpPassword) {
      if (!validatePassword(signUpPassword)) {
        setPasswordError(
          "Le mot de passe doit contenir une minuscule, une majuscule, un chiffre et un caractère spécial"
        );
      } else {
        setPasswordError("");
      }
    }
    // Reste du code pour l'inscription...
  };

  const handleSignIn = () => {
    login({ email: signInEmail, password: signInPassword }).then((response) => {
      if (response.data.message === "Authentification réussi") {
        toast.show({
          title: "Succès",
          description: "Vous vous êtes bien connecté.",
          status: "success",
          duration: 2000,
          isClosable: true,
          backgroundColor: "#008000",
          placement: "top",
        });

        setTimeout(() => {
          AsyncStorage.setItem("@token", response.data.token)
            .then(() => {
              const userDecoded = jwtDecode(response.data.token);
              setUser(userDecoded);
              setIsLogged(true);
              navigation.navigate("Main", {"user": user})
            })
            .catch((err) => console.error("Error in saving token", err));
        }, 2000);
      } else {
        toast.show({
          title: "Erreur",
          description: "Le compte n'existe pas.",
          status: "success",
          duration: 2000,
          isClosable: true,
          backgroundColor: "#FF0000",
          placement: "top",
        });
      }
    });
  };

  const handleResetPassword = () => {
    // Votre logique pour envoyer le lien de réinitialisation du mot de passe...

    setIsModalOpen(false);

    toast.show({
      title: "Merci",
      description:
        "Une demande de réinitialisation de mot de passe vient de vous être envoyée.",
      status: "success",
      duration: 3000,
      isClosable: true,
      backgroundColor: "#008000",
      placement: "top",
    });
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <Center flex={1} px="5">
      <VStack space={4} w="100%">
        <Heading size="xl" color="coolGray.800" alignSelf="center">
          {isSignIn ? "Connexion" : "Inscription"}
        </Heading>

        {isSignIn ? (
          <>
            <FormControl
              isInvalid={
                !isSignIn && signInEmail && !validateEmail(signInEmail)
              }
            >
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Email
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Email"
                color="black"
                fontSize="md"
                type="email"
                value={signInEmail}
                onChangeText={(value) => setSignInEmail(value)}
              />
              {!isSignIn && signInEmail && !validateEmail(signInEmail) && (
                <FormControl.ErrorMessage
                  leftIcon={
                    <Icon
                      as={MaterialIcons}
                      name="error"
                      size={5}
                      color="red.500"
                    />
                  }
                >
                  Adresse email invalide.
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                !isSignIn && signInPassword && !validatePassword(signInPassword)
              }
            >
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Mot de passe
              </FormControl.Label>
              <HStack space={2}>
                <Input
                  width={"100%"}
                  variant="underlined"
                  placeholder="Mot de passe"
                  color="black"
                  fontSize="md"
                  value={signInPassword}
                  onChangeText={(value) => setSignInPassword(value)}
                  type={isPasswordVisible ? "text" : "password"}
                  position={"relative"}
                />
                <IconButton
                  width={50}
                  variant="unstyled"
                  position={"absolute"}
                  right={0}
                  icon={
                    <Icon
                      as={MaterialIcons}
                      name={isPasswordVisible ? "visibility-off" : "visibility"}
                      size={8}
                      color="coolGray.600"
                    />
                  }
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              </HStack>
              {!isSignIn &&
                signInPassword &&
                !validatePassword(signInPassword) && (
                  <FormControl.ErrorMessage
                    leftIcon={
                      <Icon
                        as={MaterialIcons}
                        name="error"
                        size={5}
                        color="red.500"
                      />
                    }
                  >
                    Le mot de passe doit contenir au moins une minuscule, une
                    majuscule, un chiffre et un caractère spécial.
                  </FormControl.ErrorMessage>
                )}
            </FormControl>
          </>
        ) : (
          <>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Prénom
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Prénom"
                color="black"
                fontSize="md"
                value={firstName}
                onChangeText={(value) => setFirstName(value)}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Nom
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Nom"
                color="black"
                fontSize="md"
                value={lastName}
                onChangeText={(value) => setLastName(value)}
              />
            </FormControl>

            <FormControl isInvalid={!isSignIn && !validateEmail(signUpEmail)}>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Email
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Email"
                type="email"
                color="black"
                fontSize="md"
                value={signUpEmail}
                onChangeText={setSignUpEmail}
              />
              {!isSignIn && signUpEmail && !validateEmail(signUpEmail) && (
                <FormControl.ErrorMessage
                  leftIcon={
                    <Icon
                      as={MaterialIcons}
                      name="error"
                      size={5}
                      color="red.500"
                    />
                  }
                >
                  Adresse email invalide.
                </FormControl.ErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={!isSignIn && !validatePassword(signUpPassword)}
            >
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Mot de passe
              </FormControl.Label>
              <HStack space={2}>
                <Input
                  width={"100%"}
                  variant="underlined"
                  placeholder="Mot de passe"
                  color="black"
                  fontSize="md"
                  value={signUpPassword}
                  onChangeText={setSignUpPassword}
                  type={isPasswordVisible ? "text" : "password"}
                  position={"relative"}
                />
                <IconButton
                  width={50}
                  variant="unstyled"
                  position={"absolute"}
                  right={0}
                  icon={
                    <Icon
                      as={MaterialIcons}
                      name={isPasswordVisible ? "visibility-off" : "visibility"}
                      size={8}
                      color="coolGray.600"
                    />
                  }
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              </HStack>
              {!isSignIn &&
                signUpPassword &&
                !validatePassword(signUpPassword) && (
                  <FormControl.ErrorMessage
                    leftIcon={
                      <Icon
                        as={MaterialIcons}
                        name="error"
                        size={5}
                        color="red.500"
                      />
                    }
                  >
                    Le mot de passe doit contenir au moins une minuscule, une
                    majuscule, un chiffre et un caractère spécial.
                  </FormControl.ErrorMessage>
                )}
            </FormControl>
          </>
        )}

        <Button
          bg="#5F8D85"
          _text={{ color: "black", fontSize: "xl" }}
          onPress={isSignIn ? handleSignIn : handleSignUp}
          disabled={
            isSignIn
              ? !signInEmail || !signInPassword
              : !firstName ||
                !lastName ||
                !validateEmail(signUpEmail) ||
                !validatePassword(signUpPassword)
          }
        >
          {isSignIn ? "Se connecter" : "S'inscrire"}
        </Button>

        {isSignIn && (
          <Button
            variant="link"
            _text={{ color: "#5F8D85", fontSize: "md" }}
            onPress={() => setIsModalOpen(true)}
          >
            Retrouvez votre mot de passe
          </Button>
        )}

        <HStack justifyContent="center" alignItems="center">
          <Text color="coolGray.600">
            {isSignIn ? "Vous n'avez pas de compte ? " : "Déjà membre ? "}
          </Text>
          <IconButton
            variant="link"
            icon={
              <Icon
                as={MaterialIcons}
                name="swap-horiz"
                size={10}
                color="#5F8D85"
              />
            }
            onPress={() => setIsSignIn(!isSignIn)}
          />
        </HStack>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Content>
          <Modal.Header>Retrouver votre mot de passe</Modal.Header>
          <Modal.Body>
            <VStack space={2}>
              <Input placeholder="Votre email" />
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button bg="#5F8D85" onPress={handleResetPassword}>
              Envoyer
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default UserForm;
