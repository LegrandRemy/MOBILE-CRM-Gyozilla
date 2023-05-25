import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from '../Components/Card'
import {
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  HStack,
  Image,
} from 'native-base'
const team = require('../../assets/example.jpg')
const plats = require('../../assets/plats.jpg')
const boissons = require('../../assets/boissons.jpg')
const desserts = require('../../assets/desserts.jpg')

const Engagements = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nos engagements</Text>
      <Text style={styles.subtitle}>
        Nous vous accueillons avec un plaisir infini
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Un établissement adapté à tout profil
        </Text>
        <Text style={styles.sectionText}>
          Que vous veniez seul, en famille, ou pour un dîner romantique, vous
          trouverez forcément une table qui vous correspond. Chez Gyozilla, nous
          avons pensé à tous les cas de figure.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Un service rapide et efficace</Text>
        <Text style={styles.sectionText}>
          Nous estimons que même avec un emploi du temps chargé, vous avez le
          droit de venir vous régaler chez Gyozilla. C'est pourquoi le service
          est organisé de telle sorte que vous puissiez manger même dans un
          court laps de temps.
        </Text>
      </View>
      <Text style={styles.subtitle}>
        Toute notre équipe travaille avec joie pour vous satisfaire
      </Text>
      <View style={styles.imageContainer}>
        <Image source={team} style={styles.image} />
      </View>
      <Text style={styles.subtitle}>
        La qualité est garantie pour chacun des produits
      </Text>
      <Text style={styles.sectionText} marginBottom={15}>
        Nous accordons une grande importance à toutes les étapes de préparation
        de nos produits. Que ce soit les fournisseurs des ingrédients, le
        respect des normes d'hygiène ou encore la façon dont le service est
        géré, nous veillons à ce que tout soit exécuté avec le plus grand soin.
      </Text>
      {/* <View style={styles.cardsContainer}>
        <Card
          image={plats}
          title="Nos plats"
          description="Les plats que nous proposons sont variés mais tous préparés avec amour. Du plus doux au plus épicé, il y aura de quoi satisfaire chaque personne."
        />
        <Card
          image={boissons}
          title="Nos boissons"
          description="Les boissons proviennent directement d'Asie, en partenariat exclusif avec 'Chang-Ting'. Vous serez étonnés du plaisir qu'un simple liquide vous procurera."
        />
        <Card
          image={desserts}
          title="Nos desserts"
          description="Nos mets les plus délicats ne sont pas uniquement salés. En effet, vous prendrez un plaisir fou en dégustant nos desserts faits maison aussi savoureux les uns que les autres."
        />
      </View> */}

      <Box alignItems="center" marginTop={18} style={styles.card}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}
        >
          <Box />
          <Box>
            <AspectRatio w="100%" height={200} ratio={16 / 9}>
              <Image
                height={200}
                width={'100%'}
                resizeMode={'cover'}
                source={plats}
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1" style={styles.heading}>
                Nos plats
              </Heading>
            </Stack>
            <Text fontWeight="400">
              Les plats que nous proposons sont variés mais tous préparés avec
              amour. Du plus doux au plus épicé, il y aura de quoi satisfaire
              chaque personne.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            ></HStack>
          </Stack>
        </Box>
      </Box>
      <Box alignItems="center" style={styles.card}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}
        >
          <Box>
            <AspectRatio w="100%" height={200} ratio={16 / 9}>
              <Image
                height={200}
                source={boissons}
                width={'100%'}
                resizeMode={'cover'}
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1" style={styles.heading}>
                Nos boissons
              </Heading>
            </Stack>
            <Text fontWeight="400">
              Les boissons proviennent directement d'Asie, en partenariat
              exclusif avec "Chang-Ting". Vous serez étonnés du plaisir qu'un
              simple liquide vous procurera.
            </Text>
          </Stack>
        </Box>
      </Box>
      <Box alignItems="center" style={styles.card}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}
        >
          <Box>
            <AspectRatio w="100%" height={200} ratio={16 / 9}>
              <Image
                height={200}
                source={desserts}
                width={'100%'}
                resizeMode={'cover'}
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1" style={styles.heading}>
                Nos desserts
              </Heading>
            </Stack>
            <Text fontWeight="400">
              Nos mets les plus délicats ne sont pas uniquement salés. En effet,
              vous prendrez un plaisir fou en dégustant nos desserts faits
              maison aussi savoureux les uns que les autres.
            </Text>
          </Stack>
        </Box>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 25,
    color: 'red',
    borderWidth: 1,
    borderColor: '#F8A500',
    backgroundColor: 'black',
    padding: 10,
    color: '#F8A500',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#F8A500',
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#739B94',
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
  },
  card: {
    marginVertical: 5,
  },
  heading: {
    color: '#739B94',
  },
  // cardsContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  // card: {
  //   width: 375,
  //   height: 300,
  //   margin: 10,
  //   backgroundColor: '#fff',
  //   borderRadius: 5,
  //   elevation: 3,
  // },
  // cardImage: {
  //   width: '100%',
  //   height: 140,
  // },
  // cardTitle: {
  //   fontSize: 18,
  //   margin: 10,
  // },
  // cardDescription: {
  //   fontSize: 16,
  //   marginHorizontal: 10,
  // },
})

export default Engagements
