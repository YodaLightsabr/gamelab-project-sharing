import {
    BaseStyles,
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Label,
    Link,
    NavLink,
    Radio,
    Select,
    Slider,
    Text,
    Textarea
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import ColorSwitcher from '../components/color-switcher'
import Icon from '@hackclub/icons'
import ProjectDisplay from '../components/ProjectDisplay.js'

const ExplorePage = () => (
<>
    <Head>
    <title>Hack Club Explore</title>
    <Meta
        name="Explore"
        description="Explore the amazing mini-projects that Hack Clubbers have created."
    />
    </Head>
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
    <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <ColorSwitcher />
        <Heading as="h1" variant="title" color="red">
        <Icon glyph="explore" size={64} style={{ verticalAlign: 'bottom' }} /> Hack Club Explore
        </Heading>
        <Text as="p" variant="subtitle" mt={3}>
        Explore mini-projects made with <Link href="https://github.com/hackclub/game-lab/">Game Lab</Link> and <Link href="https://github.com/hackclub/muse/">Muse</Link>.
        </Text>
        <Container variant="narrow" sx={{ mt: 3, mb: 4 }}>
            <Label style={{ position: 'relative' }}> {/* The search feature has not been implemented yet */}
                <Icon glyph="search" size={32} style={{ position: 'absolute', top: '7px', left: '7px' }} />
                <Input placeholder="Search" style={{ border: '2px solid ' + theme.colors.muted, paddingLeft: '40px',
                    "::WebkitInputPlaceholder": theme.colors.muted,
                    "::MozPlaceholder": theme.colors.muted
                }} />
            </Label>
        </Container>
        <Grid
        gap={4}
        columns="auto auto auto"
        sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
            a: { color: 'muted', transition: 'color .125s ease-in-out' }
        }}
        >
        <NavLink href="https://hackclub.com">Hack Club</NavLink>
        <NavLink href="#">
            Link 2
        </NavLink>
        <NavLink href="#">
            Link 3
        </NavLink>
        </Grid>
    </Container>
    </Box>
    <Box
    as="main"
    sx={{ bg: 'background', color: 'text', py: 4, h2: { mt: 4 } }}
    >
        <Heading variant="title" style={{ textAlign: 'center' }}>Featured</Heading>
        <br />
        <ProjectDisplay projects={[
            {
                name: "Pong-Ish",
                description: "It's kind of like pong (ish).",
                image: "https://user-images.githubusercontent.com/27078897/149371012-faf3e45f-9d3a-47d4-831b-566d9171d2bd.gif",
                url: "/gamelab/recZMaBjgnNXgZsUK",
                author: "Leo"
            },
            {
                name: "Crappy Birds",
                description: "A game about birds.",
                image: "https://user-images.githubusercontent.com/27078897/149380918-a1855ab3-cc2d-4a9a-adc0-d5316d6f17ba.gif",
                url: "/gamelab/recJX7dAboz7v1OFG",
                author: "Leo"
            },
            {
                name: "Brick Broken",
                bescription: "A game about bricks. (Or, tomatoes? No, wait, apples.)",
                image: "https://user-images.githubusercontent.com/27078897/150606449-5b73d7fe-f2d3-432f-9cc5-346c20919ec8.gif",
                url: "/gamelab/rec6bdF7IS7vY7xzl",
                author: "Leo"
            }
        ]} style={{ }} />

        <Container variant="wide" style={{  }}>
            {/*
            <Heading variant="headline">Text</Heading>
            <Card>
            {Object.keys(theme.text).map(key => {
                const Component = key.includes('head') ? Heading : Text
                return (
                <Component key={key} variant={key} sx={{ mt: 0, mb: 3 }}>
                    {key}
                </Component>
                )
            })}
            </Card>
            <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
            <p>
                This is a whole paragraph of text, include{' '}
                <code>code like this</code>, as well as{' '}
                <a href="https://hackclub.com/">
                <code>linked code</code>
                </a>
                {' & '}
                <a href="https://hackclub.com/">regular links</a>. The paragraph
                ended up being 1 sentence, but now I guess it???s <strong>two</strong>
                .
            </p>
            <pre>
                <code>Here???s a code block! No highlighting to be found.</code>
            </pre>
            </Card>
            <Heading variant="headline">Buttons</Heading>
            {Object.keys(theme.buttons).map(key => (
            <Button key={key} variant={key} sx={{ mr: 3, mb: 3 }}>
                {key} btn
            </Button>
            ))}
            <Heading variant="headline">Forms</Heading>
            <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
            <Label>
                Full name
                <Input placeholder="Zach Latta" />
            </Label>
            <Label>
                How are you primarily associated with Hack Club?
                <Select>
                <option value="" disabled hidden>
                    Select one???
                </option>
                <option value="club-leader">I lead a club</option>
                <option value="club-member">I am a club member</option>
                <option value="slack-member">I am active on Slack</option>
                <option value="alum">I am a Hack Club alum</option>
                <option value="none">None of the above</option>
                </Select>
            </Label>
            <Label variant="labelHoriz">
                <Checkbox />
                Remember me
            </Label>
            <Flex sx={{ flexWrap: 'wrap' }}>
                <Label variant="labelHoriz">
                <Radio name="letter" /> Alpha
                </Label>
                <Label variant="labelHoriz">
                <Radio name="letter" /> Bravo
                </Label>
                <Label variant="labelHoriz">
                <Radio name="letter" /> Charlie
                </Label>
            </Flex>
            <Label>
                Why do you want to come?
                <Textarea placeholder="Write a few sentences." />
            </Label>
            <Label>
                Slider
                <Slider color="red" />
            </Label>
            <Button
                as="button"
                type="submit"
                children="RSVP"
                sx={{ gridColumn: [null, 'span 2'] }}
            />
            </Grid>
            <Heading variant="headline">Badges</Heading>
            {Object.keys(theme.badges).map(key => (
            <Badge
                key={key}
                variant={key}
                mr={3}
                color={key === 'outline' ? 'muted' : null}
            >
                {key}
            </Badge>
            ))}
            <Heading variant="headline">Colors</Heading>
        */}
        </Container>
    </Box>
</>
)

export default ExplorePage