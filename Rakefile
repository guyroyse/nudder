require 'rubygems'
require 'cucumber'
require 'cucumber/rake/task'

task :default => [:specs, :features]

task :specs do
	sh "node spec.js"
end

task :features do
	begin
		[:start_node, :cucumber].each do |t|
			Rake::Task[t].execute
		end
	ensure
		Rake::Task[:stop_node].execute
	end
end

task :start_node do
  sh "node app.js &"
end

Cucumber::Rake::Task.new(:cucumber) do |t|
  t.cucumber_opts = "features --format pretty"
end

task :stop_node do
  sh "pkill -x node"  
end
