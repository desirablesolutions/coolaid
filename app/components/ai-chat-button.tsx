"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bot, X, Sparkles, MessageSquare, Settings, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AiChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full animated-border shadow-lg group relative overflow-hidden"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute inset-0 animated-gradient opacity-50 group-hover:opacity-75 transition-opacity" />
          <Bot className="h-6 w-6 relative z-10" />
          <motion.div
            className="absolute inset-0 bg-primary/20"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-[380px] z-50"
          >
            <Card className="shadow-xl animated-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                    <CardTitle>Cool Aid AI Assistant</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Your personal HVAC expert, available 24/7</CardDescription>
              </CardHeader>

              <Tabs defaultValue="chat">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="chat">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </TabsTrigger>
                  <TabsTrigger value="help">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="chat">
                  <CardContent className="h-[300px] overflow-y-auto space-y-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="font-medium">Cool Aid AI</p>
                      <div className="text-sm text-muted-foreground">
                        <p>Hello! I'm your AI assistant. I can help you with:</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          <li>System diagnostics</li>
                          <li>Maintenance tips</li>
                          <li>Energy optimization</li>
                          <li>Troubleshooting</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex w-full gap-2">
                      <Input placeholder="Ask me anything..." />
                      <Button className="animated-border">
                        <Sparkles className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </TabsContent>

                <TabsContent value="settings">
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Notification Settings</h4>
                        <p className="text-sm text-muted-foreground">Configure how and when you receive AI insights</p>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>

                <TabsContent value="help">
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Quick Start Guide</h4>
                        <p className="text-sm text-muted-foreground">
                          Learn how to get the most out of your AI assistant
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

