import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Button,
  Input,
  Center,
  VStack,
  HStack,
  Box,
  FormControl,
  Heading,
  Icon,
  IconButton,
  Modal,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import validateEmail from "../utils/validateEmail";
import validatePassword from "../utils/validatePassword";
import { useToast } from "native-base";

const UserForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();

  const handleSignUp = () => {
    if (email) {
      if (!validateEmail(email)) {
        setEmailError("Email invalide");
      } else {
        setEmailError("");
      }
    }

    if (password) {
      if (!validatePassword(password)) {
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
    // Votre logique de connexion
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
    });
  };

  return (
    <Center flex={1} px="5">
      <VStack space={4} w="100%">
        <Heading size="xl" color="coolGray.800" alignSelf="center">
          {isSignIn ? "Connexion" : "Inscription"}
        </Heading>

        {isSignIn ? (
          <>
            <FormControl
              isInvalid={!isSignIn && email && !validateEmail(email)}
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
                fontSize="md"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
              {!isSignIn && email && !validateEmail(email) && (
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
              isInvalid={!isSignIn && password && !validatePassword(password)}
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
              <Input
                variant="underlined"
                placeholder="Mot de passe"
                fontSize="md"
                value={password}
                onChangeText={(value) => setPassword(value)}
                type="password"
              />
              {!isSignIn && password && !validatePassword(password) && (
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
                fontSize="md"
                value={lastName}
                onChangeText={(value) => setLastName(value)}
              />
            </FormControl>

            <FormControl isInvalid={!isSignIn && !validateEmail(email)}>
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
                fontSize="md"
                value={email}
                onChangeText={setEmail}
              />
              {!isSignIn && email && !validateEmail(email) && (
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

            <FormControl isInvalid={!isSignIn && !validatePassword(password)}>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "xl",
                  fontWeight: 600,
                }}
              >
                Mot de passe
              </FormControl.Label>
              <Input
                variant="underlined"
                placeholder="Mot de passe"
                fontSize="md"
                value={password}
                onChangeText={setPassword}
                type="password"
              />
              {!isSignIn && password && !validatePassword(password) && (
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
              ? !validateEmail(email) || !validatePassword(password)
              : !firstName ||
                !lastName ||
                !validateEmail(email) ||
                !validatePassword(password)
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
