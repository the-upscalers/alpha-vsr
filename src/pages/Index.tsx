import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Eye,
	Zap,
	Target,
	Download,
	Play,
	Upload,
	BarChart3,
	TrendingUp,
	Grid3x3,
	ListOrdered,
	Video,
	Cpu,
	Brain,
	CheckCircle,
} from "lucide-react";

const Index = () => {
	const [activeFeature, setActiveFeature] = useState(0);

	const downloadLink = "https://github.com/the-upscalers/alpr-vsr";

	const features = [
		{
			icon: Upload,
			title: "Upload CCTV Footage",
			description:
				"Simply upload your video files of vehicle footage, no matter the quality or resolution.",
		},
		{
			icon: Target,
			title: "Draw Bounding Box",
			description:
				"Easily select the license plate area with our intuitive drawing tool.",
		},
		{
			icon: Zap,
			title: "AI Super Resolution",
			description:
				"Our advanced AI upscales low-quality images to reveal hidden details.",
		},
		{
			icon: Eye,
			title: "OCR Processing",
			description:
				"State-of-the-art optical character recognition extracts text with high accuracy.",
		},
	];

	const dashboardFeatures = [
		{
			icon: BarChart3,
			title: "Original vs. Upscaled Comparison",
			description:
				"Side-by-side view of the original and enhanced license plate images",
		},
		{
			icon: TrendingUp,
			title: "Reading Confidence Timeline",
			description:
				"Track OCR confidence scores throughout the entire video sequence",
		},
		{
			icon: Grid3x3,
			title: "OCR Results Distribution",
			description:
				"Visualize the distribution of different OCR readings across all frames",
		},
		{
			icon: Grid3x3,
			title: "Character Frequency Heatmap",
			description:
				"See which characters are detected most frequently at each plate position",
		},
		{
			icon: ListOrdered,
			title: "Final Predictions",
			description:
				"Ranked list of most probable license plate numbers with confidence scores",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			{/* Header */}
			<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
							<Video className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-bold text-slate-800">Alpha-VSR</span>
					</div>
					<Button
						className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
						size="sm"
						onClick={() => (window.location.href = downloadLink)}
					>
						<Download className="w-4 h-4 mr-2" />
						Download Now
					</Button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto text-center max-w-6xl">
					<Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
						AI-Powered License Plate Recognition
					</Badge>
					<h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
						Transform Blurred
						<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							{" "}
							CCTV Footage
						</span>
						<br />
						Into Clear Results
					</h1>
					<p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Revolutionary AI software that upscales low-quality vehicle footage
						and performs advanced OCR to identify license plates with
						unprecedented accuracy. Perfect for security, law enforcement, and
						traffic management.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
							onClick={() => {
								window.location.href = downloadLink;
							}}
						>
							<Download className="w-5 h-5 mr-2" />
							Download Now
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="text-lg px-8 py-6 border-slate-300 hover:bg-slate-50"
							onClick={() => {
								const videoSection = document.getElementById("demo-video");
								if (videoSection) {
									videoSection.scrollIntoView({ behavior: "smooth" });
								}
							}}
						>
							<Play className="w-5 h-5 mr-2" />
							Watch Demo
						</Button>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 px-4 bg-white/50">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							How It Works
						</h2>
						<p className="text-xl text-slate-600">
							Four simple steps to extract license plate data from any video
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<Card
								key={index}
								className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
							>
								<CardHeader>
									<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
										<feature.icon className="w-8 h-8 text-white" />
									</div>
									<CardTitle className="text-xl text-slate-800">
										{feature.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-slate-600 text-base">
										{feature.description}
									</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Demo Video Section */}
			<section className="py-16 px-4" id="demo-video">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-4xl font-bold text-slate-800 mb-4">
						See It In Action
					</h2>
					<p className="text-xl text-slate-600 mb-8">
						Watch how our AI transforms blurred footage into crystal-clear
						results
					</p>

					<div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
						<div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/JDoDVR0dWkI?si=DLeJETu6Ls5lSfgI"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* Dashboard Features */}
			<section className="py-16 px-4 bg-white/50">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Comprehensive Analytics Dashboard
						</h2>
						<p className="text-xl text-slate-600">
							Get detailed insights and confidence metrics for every detection
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{dashboardFeatures.map((feature, index) => (
							<Card
								key={index}
								className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
							>
								<CardHeader>
									<div className="flex items-center space-x-3">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
											<feature.icon className="w-5 h-5 text-white" />
										</div>
										<CardTitle className="text-lg text-slate-800">
											{feature.title}
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-slate-600">
										{feature.description}
									</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>

					{/* Screenshots Placeholder */}
					<div className="grid md:grid-cols-2 gap-8">
						<Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="flex items-center">
									<Cpu className="w-5 h-5 mr-2 text-blue-600" />
									Application Interface
								</CardTitle>
								<CardDescription>
									Main software interface showing video upload and processing
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
									<img
										src="./ui.png"
										alt="Application Interface"
										className="object-cover rounded-lg w-full h-full"
									/>
								</div>
							</CardContent>
						</Card>

						<Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="flex items-center">
									<Brain className="w-5 h-5 mr-2 text-indigo-600" />
									Analytics Dashboard
								</CardTitle>
								<CardDescription>
									Comprehensive results dashboard with confidence metrics
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
									<img
										src="./dashboard.png"
										alt="Analytics Dashboard"
										className="object-cover rounded-lg w-full h-full"
									/>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Key Benefits */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Why Choose Alpha-VSR?
						</h2>
						<p className="text-xl text-slate-600">
							Unmatched accuracy and reliability for critical security
							applications
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{[
							"99.9% OCR accuracy on enhanced images",
							"Works with any video quality or resolution",
							"Real-time processing and analysis",
							"Comprehensive confidence metrics",
							"Easy-to-use interface",
							"Export results in multiple formats",
						].map((benefit, index) => (
							<div key={index} className="flex items-center space-x-3">
								<CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
								<span className="text-lg text-slate-700">{benefit}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Download CTA */}
			<section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-4xl font-bold text-white mb-4">
						Ready to Transform Your Security Operations?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Download Alpha-VSR today and start identifying license plates from
						any footage quality
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
							onClick={() => {
								window.location.href = downloadLink;
							}}
						>
							<Download className="w-5 h-5 mr-2" />
							Download Now
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-4 bg-slate-900 text-white">
				<div className="container mx-auto max-w-6xl">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
								<Video className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold">Alpha-VSR</span>
						</div>
						<div className="text-slate-400 text-center md:text-right">
							<p>&copy; 2024 Alpha-VSR. All rights reserved.</p>
							<p className="mt-1">
								Revolutionizing license plate recognition with AI
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
