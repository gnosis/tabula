import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { Provider as UrqlProvider } from "urql"
/** Views **/
import { LandingView } from "./components/views/home/LandingView"
import { WalletView } from "./components/views/wallet/WalletView"
import { PublishView } from "./components/views/publication/PublishView"
import { PublicationPostView } from "./components/views/publication/PublicationPostView"
import { PublicationProvider } from "./services/publications/contexts"
import { CreatePostView } from "./components/views/publication/CreatePostView"
import { PreviewPostView } from "./components/views/publication/PreviewPostView"
import { ArticleView } from "./components/views/publication/ArticleView"
import ScrollToTop from "./components/commons/ScrollToTop"
import { subgraphClient } from "./services/graphql"
import { PermissionView } from "./components/views/publication/PermissionView"
import SetupIpfsView from "./components/views/pinning/SetupIpfsView"
import { useWeb3React } from "@web3-react/core"
import { PosterProvider } from "./services/poster/context"
import { WalletProvider } from "./connectors/WalletProvider"

const App: React.FC = () => {
  // the chainId should be from the publication if its present

  const { chainId: initialChainIdFromProvider } = useWeb3React() // chain id from connected wallet
  const [chainId, setChainId] = useState(initialChainIdFromProvider)
  const [currentSubgraphClient, setCurrentSubgraphClient] = useState(subgraphClient(chainId))

  const updateChainId = (newChainId: number | undefined) => {
    if (newChainId !== chainId) {
      setChainId(newChainId)
    }
  }

  useEffect(() => {
    setCurrentSubgraphClient(subgraphClient(chainId))
  }, [chainId])

  useEffect(() => {
    setChainId(initialChainIdFromProvider)
  }, [initialChainIdFromProvider])

  return (
    <SnackbarProvider maxSnack={1}>
      <UrqlProvider value={currentSubgraphClient}>
        <WalletProvider>
          <PublicationProvider>
            <PosterProvider>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<LandingView />} />
                <Route path="/wallet" element={<WalletView />} />
                <Route path="/:network">
                  <Route path="pinning" element={<SetupIpfsView />} />
                  <Route path="publications" element={<PublishView updateChainId={updateChainId} />} />

                  <Route path=":publicationId/permissions/:type" element={<PermissionView />} />

                  <Route path=":publicationId/:postId/:type" element={<CreatePostView />} />
                  <Route path=":publicationId/:postId/preview/:type" element={<PreviewPostView />} />
                  <Route path=":publicationId/:articleId" element={<ArticleView updateChainId={updateChainId} />} />

                  <Route path=":publicationId" element={<PublicationPostView updateChainId={updateChainId} />} />
                </Route>
              </Routes>
            </PosterProvider>
          </PublicationProvider>
        </WalletProvider>
      </UrqlProvider>
    </SnackbarProvider>
  )
}

export default App
